// Serveur minimal pour l'assistant IA de Sirat : garde la clé API secrète côté serveur.
// Lancer : npm i @anthropic-ai/sdk && ANTHROPIC_API_KEY=... ALLOWED_ORIGIN=https://ton-site.example node server/ai-proxy.mjs
// Puis mettre l'URL de ce serveur dans js/config.js (aiEndpoint, par exemple "https://ton-serveur.example/ask").
import http from "node:http";
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic(); // lit ANTHROPIC_API_KEY
const MODEL = process.env.MODEL || "claude-opus-5-5";
const ORIGIN = process.env.ALLOWED_ORIGIN || "*";
const PORT = process.env.PORT || 8787;
const hits = new Map(); // limite simple : 20 questions par heure et par IP

function limited(ip) {
  const now = Date.now(), list = (hits.get(ip) || []).filter(t => now - t < 3600e3);
  list.push(now); hits.set(ip, list); return list.length > 20;
}
const send = (res, code, obj) => { res.writeHead(code, { "content-type": "application/json", "access-control-allow-origin": ORIGIN, "access-control-allow-headers": "content-type", "access-control-allow-methods": "POST, OPTIONS" }); res.end(JSON.stringify(obj)); };

http.createServer(async (req, res) => {
  if (req.method === "OPTIONS") return send(res, 204, {});
  if (req.method !== "POST" || req.url !== "/ask") return send(res, 404, { error: "not_found" });
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  if (limited(ip)) return send(res, 429, { error: "rate_limited" });
  let body = ""; for await (const chunk of req) { body += chunk; if (body.length > 20000) return send(res, 413, { error: "too_large" }); }
  let prompt; try { prompt = JSON.parse(body).prompt; } catch { return send(res, 400, { error: "bad_json" }); }
  if (typeof prompt !== "string" || prompt.length < 5) return send(res, 400, { error: "bad_prompt" });
  try {
    const msg = await client.messages.create({ model: MODEL, max_tokens: 1024, output_config: { effort: "low" }, messages: [{ role: "user", content: prompt }] });
    if (msg.stop_reason === "refusal") return send(res, 200, { text: "Je ne peux pas répondre à cette question. Consulte une personne qualifiée en sciences islamiques." });
    send(res, 200, { text: msg.content.filter(b => b.type === "text").map(b => b.text).join("") });
  } catch (e) { send(res, e.status || 500, { error: "upstream_error" }); }
}).listen(PORT, () => console.log("Sirat AI proxy sur le port " + PORT));
