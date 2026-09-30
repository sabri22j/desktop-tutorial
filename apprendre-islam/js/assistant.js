/* Assistant IA « ancré » : Claude ne répond qu'à partir des extraits de l'application (chapitres et réponses sourcées).
   - Dans une page Claude : via la capacité « sample » (l'appel est fait avec le compte Claude du lecteur).
   - Version hébergée : via un petit serveur (APP_CONFIG.aiEndpoint) qui garde la clé API secrète.
   - Sans IA : réponses préparées hors ligne (ai.js). */
const AI = (() => {
  let sampleFn;
  async function getSample() { if (sampleFn !== undefined) return sampleFn; try { sampleFn = window.claude && window.claude.use ? await window.claude.use("sample") : null; } catch { sampleFn = null; } return sampleFn; }
  const mode = async () => (await getSample()) ? "claude" : APP_CONFIG.aiEndpoint ? "server" : "offline";
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
    return `Tu es Sirâj, l'assistant pédagogique d'une application française d'apprentissage de l'islam. Règles STRICTES :
1. Réponds UNIQUEMENT à partir des extraits fournis. Si l'information n'y figure pas, dis-le clairement et invite à consulter une personne qualifiée en sciences islamiques. N'invente JAMAIS un verset, un hadith, une référence, une date ou un chiffre.
2. N'utilise comme références que celles écrites dans les extraits.
3. Distingue ce que disent les textes (Coran, hadith), les interprétations et les informations historiques.
4. Si un point est discuté ou si les avis divergent, dis-le.
5. Ne rends pas de fatwa : pour une situation personnelle de jurisprudence, renvoie à un savant.
6. Français simple et bienveillant, 150 mots maximum, sans mise en forme compliquée.

EXTRAITS :
${blocks.join("\n\n")}
${hist && hist.length ? "\nÉCHANGES PRÉCÉDENTS :\n" + hist.map(h => `${h.role === "user" ? "Question" : "Réponse"} : ${h.text}`).join("\n") + "\n" : ""}
QUESTION : ${q}`;
  }
  async function ask(q, hist, onText) {
    const ctx = retrieve(q), md = await mode();
    const sources = [...ctx.chs.map(c => ({ id: c.id, title: c.title, refs: c.sources })), ...ctx.kb.map(e => ({ id: null, title: e.title, refs: e.src.map(s => s[1]) }))];
    if (!sources.length) return { text: null, sources: [], mode: md, none: true };
    if (md === "offline") { const e = askAI(q); return { text: null, offline: e, sources, mode: md }; }
    const prompt = buildPrompt(q, ctx, hist);
    if (md === "claude") { const fn = await getSample(); const r = await fn(prompt, { modelTier: "default", cache: false, onText: o => onText && onText(o.text) }); return { text: r.text, sources, mode: md }; }
    const res = await fetch(APP_CONFIG.aiEndpoint, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ prompt }) });
    if (!res.ok) throw { code: "server_" + res.status };
    const j = await res.json(); return { text: j.text, sources, mode: md };
  }
  return { ask, mode, retrieve };
})();
