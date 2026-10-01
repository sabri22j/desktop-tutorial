/* Assistant IA « ancré » : Claude ne répond qu'à partir des extraits de l'application (chapitres et réponses sourcées).
   - Dans une page Claude : via la capacité « sample » (l'appel est fait avec le compte Claude du lecteur).
   - Version hébergée : via un petit serveur (APP_CONFIG.aiEndpoint) qui garde la clé API secrète.
   - Sans IA : réponses préparées hors ligne (ai.js). */
const AI = (() => {
  let sampleFn;
  async function getSample() { if (sampleFn !== undefined) return sampleFn; try { sampleFn = window.claude && window.claude.use ? await window.claude.use("sample") : null; } catch { sampleFn = null; } return sampleFn; }
  /* IA personnelle : chacun branche SA clé API (Claude, OpenAI ou Gemini). La clé reste sur l'appareil, jamais synchronisée ni envoyée à Sirat. */
  const KEYSTORE = "sirat-ai";
  const PROVIDERS = {
    claude: { name: "Claude (Anthropic)", model: "claude-opus-5-5", url: "https://console.anthropic.com/settings/keys" },
    openai: { name: "ChatGPT (OpenAI)", model: "gpt-4o-mini", url: "https://platform.openai.com/api-keys" },
    gemini: { name: "Gemini (Google)", model: "gemini-2.0-flash", url: "https://aistudio.google.com/app/apikey" },
  };
  const getMine = () => { try { const o = JSON.parse(localStorage.getItem(KEYSTORE)); return o && o.key && PROVIDERS[o.provider] ? o : null; } catch { return null; } };
  const setMine = o => { try { if (o) localStorage.setItem(KEYSTORE, JSON.stringify(o)); else localStorage.removeItem(KEYSTORE); } catch {} };
  const mode = async () => getMine() ? "byok" : (await getSample()) ? "claude" : APP_CONFIG.aiEndpoint ? "server" : "offline";
  async function callMine(cfg, prompt) {
    const model = cfg.model || PROVIDERS[cfg.provider].model; let res, j;
    try {
      if (cfg.provider === "claude") {
        res = await fetch("https://api.anthropic.com/v1/messages", { method: "POST", headers: { "content-type": "application/json", "x-api-key": cfg.key, "anthropic-version": "2023-06-01", "anthropic-dangerous-direct-browser-access": "true" },
          body: JSON.stringify({ model, max_tokens: 1024, output_config: { effort: "low" }, messages: [{ role: "user", content: prompt }] }) });
      } else if (cfg.provider === "openai") {
        res = await fetch("https://api.openai.com/v1/chat/completions", { method: "POST", headers: { "content-type": "application/json", authorization: "Bearer " + cfg.key }, body: JSON.stringify({ model, messages: [{ role: "user", content: prompt }] }) });
      } else {
        res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`, { method: "POST", headers: { "content-type": "application/json", "x-goog-api-key": cfg.key }, body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }) });
      }
    } catch { throw { code: "network" }; }
    if (res.status === 401 || res.status === 403) throw { code: "bad_key" };
    if (res.status === 429) throw { code: "rate_limited" };
    if (!res.ok) throw { code: "provider_" + res.status };
    j = await res.json();
    const text = cfg.provider === "claude" ? (j.content || []).filter(b => b.type === "text").map(b => b.text).join("") : cfg.provider === "openai" ? j.choices && j.choices[0] && j.choices[0].message.content : j.candidates && j.candidates[0] && j.candidates[0].content.parts.map(p => p.text).join("");
    if (!text) throw { code: "empty" }; return text;
  }
  const STOP = new Set("quel quelle quels quelles pourquoi comment est sont cest les des une que qui dans pour avec sur par aux ete etait fait faire peut peux dit dire selon quoi quand combien".split(" "));
  const stem = w => w.length > 5 ? w.slice(0, 5) : w;
  const count = (h, s) => { let n = 0, i = h.indexOf(s); while (i >= 0 && n < 4) { n++; i = h.indexOf(s, i + s.length); } return n; };
  function retrieve(q) {
    const toks = [...new Set(normAI(q).split(/\s+/).filter(w => w.length > 2 && !STOP.has(w)).map(stem))]; if (!toks.length) return { chs: [], kb: [] };
    const chs = Object.values(CHAPTERS).map(c => { c._h = c._h || normAI(c.lessons.map(l => l.t + " " + l.body + " " + (l.fr || "")).join(" ") + " " + (c.fun || "")); c._t = c._t || normAI(c.title);
      let s = 0; toks.forEach(t => { if (c._t.includes(t)) s += 4; s += count(c._h, t); }); return { c, s }; }).filter(x => x.s > 1).sort((a, b) => b.s - a.s); const top = chs.length ? chs[0].s : 0; const pick = chs.filter(x => x.s >= Math.max(2, top * 0.4)).slice(0, 4).map(x => x.c);
    const kb = KB.map(e => ({ e, s: toks.filter(t => normAI(e.title + " " + e.k.join(" ")).includes(t)).length })).filter(x => x.s > 0).sort((a, b) => b.s - a.s).slice(0, 2).map(x => x.e);
    return { chs: pick, kb };
  }
  function buildPrompt(q, ctx, hist) {
    let n = 0; const blocks = [];
    ctx.kb.forEach(e => blocks.push(`[E${++n}] ${e.title}\n${e.a}${e.nuance ? "\nNuance : " + e.nuance : ""}\nRéférences : ${e.src.map(s => s[1]).join(" ; ")}`));
    ctx.chs.forEach(c => blocks.push(`[E${++n}] Chapitre « ${c.title} » (niveau ${c.level})\nRéférences : ${c.sources.join(" ; ")}\n${c.lessons.map(l => l.body + (l.fr ? " Traduction du sens : " + l.fr : "")).join("\n").slice(0, 1500)}`));
    return `Tu es Sirâj, l'assistant d'une application française d'apprentissage de l'islam. Réponds à la question de l'utilisateur. RÈGLES :
1. Si des EXTRAITS de l'application sont fournis, appuie-toi d'abord dessus et cite leurs références (uniquement celles écrites dans les extraits).
2. Si les extraits ne suffisent pas ou s'il n'y en a pas, tu peux répondre avec tes connaissances générales, mais commence alors par « Cette réponse ne vient pas des chapitres de l'application » et précise que les références sont à vérifier.
3. N'invente JAMAIS un verset, un hadith, un numéro de recueil, une date ou un chiffre. Si tu n'es pas sûr, dis-le.
4. Distingue ce que disent les textes (Coran, hadith), les interprétations et les informations historiques ; signale les avis divergents entre les écoles.
5. Ne rends pas de fatwa : pour une situation personnelle de jurisprudence, renvoie à un savant qualifié.
6. Reste respectueux. Si la question n'a aucun rapport avec l'islam, explique poliment que tu es là pour l'apprentissage de l'islam.
7. Français simple et bienveillant, 200 mots maximum, sans mise en forme compliquée.

${blocks.length ? "EXTRAITS DE L'APPLICATION :\n" + blocks.join("\n\n") : "EXTRAITS DE L'APPLICATION : aucun pour cette question."}
${hist && hist.length ? "\nÉCHANGES PRÉCÉDENTS :\n" + hist.map(h => `${h.role === "user" ? "Question" : "Réponse"} : ${h.text}`).join("\n") + "\n" : ""}
QUESTION : ${q}`;
  }
  async function ask(q, hist, onText) {
    const ctx = retrieve(q), md = await mode();
    const sources = [...ctx.chs.map(c => ({ id: c.id, title: c.title, refs: c.sources })), ...ctx.kb.map(e => ({ id: null, title: e.title, refs: e.src.map(s => s[1]) }))];
    if (md === "offline") return sources.length ? { text: null, offline: askAI(q), sources, mode: md } : { text: null, sources: [], mode: md, none: true };
    const prompt = buildPrompt(q, ctx, hist), general = !sources.length;
    if (md === "byok") return { text: await callMine(getMine(), prompt), sources, mode: md, general };
    if (md === "claude") { const fn = await getSample(); const r = await fn(prompt, { modelTier: "default", cache: false, onText: o => onText && onText(o.text) }); return { text: r.text, sources, mode: md, general }; }
    const res = await fetch(APP_CONFIG.aiEndpoint, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ prompt }) });
    if (!res.ok) throw { code: "server_" + res.status };
    const j = await res.json(); return { text: j.text, sources, mode: md, general };
  }
  return { ask, mode, retrieve, getMine, setMine, PROVIDERS, test: async cfg => callMine(cfg, "Réponds uniquement par le mot : ok") };
})();
