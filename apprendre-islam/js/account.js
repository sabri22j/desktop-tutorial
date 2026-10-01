/* Comptes et synchronisation de la progression.
   - « claude » : dans une page Claude, le compte Claude du lecteur (capacités user + db) ; progression stockée dans sa zone privée.
   - « firebase » : Google, Apple, e-mail (APP_CONFIG.firebase, version hébergée).
   - « local » : invité, progression sur l'appareil. Dernière écriture gagnante (date de mise à jour). */
const ACCOUNT = (() => {
  let state = { provider: "local", user: null }, fb = null, cdb = null, timer = null, listeners = [], syncing = false;
  const emit = () => listeners.forEach(f => f(state));
  async function initClaude() {
    try {
      if (!window.claude || !window.claude.use) return false;
      const [db, user] = await Promise.all([window.claude.use("db"), window.claude.use("user")]); if (!db || !user) return false;
      const id = await user.id(); if (!id) return false; const me = await user.me();
      cdb = db.collection("data/users/" + id).doc("progress"); state = { provider: "claude", user: { name: me.name || "Compte Claude", email: me.email || null, id } }; return true;
    } catch { return false; }
  }
  async function loadFb() {
    if (fb) return fb; if (!APP_CONFIG.firebase) throw { code: "not_configured" };
    const base = "https://www.gstatic.com/firebasejs/10.12.2/", [a, au, fs] = await Promise.all([import(base + "firebase-app.js"), import(base + "firebase-auth.js"), import(base + "firebase-firestore.js")]);
    const app = a.initializeApp(APP_CONFIG.firebase); fb = { au, fs, auth: au.getAuth(app), db: fs.getFirestore(app) };
    await new Promise(res => { const un = au.onAuthStateChanged(fb.auth, u => { un(); if (u) setFbUser(u); res(); }); }); return fb;
  }
  const setFbUser = u => { state = { provider: "firebase", user: { name: u.displayName || u.email || "Compte", email: u.email, id: u.uid, photo: u.photoURL } }; };
  async function fetchRemote() {
    if (state.provider === "claude") { const s = await cdb.get(); return s.exists ? JSON.parse(s.data().state) : null; }
    if (state.provider === "firebase") { const d = await fb.fs.getDoc(fb.fs.doc(fb.db, "users", state.user.id)); return d.exists() ? JSON.parse(d.data().state) : null; }
    return null;
  }
  async function push() {
    if (state.provider === "local" || syncing) return; syncing = true;
    try { const s = JSON.stringify(E.exportState());
      if (state.provider === "claude") await cdb.set({ state: s, updatedAt: Date.now() });
      else { await fb.fs.setDoc(fb.fs.doc(fb.db, "users", state.user.id), { state: s, updatedAt: Date.now() }); await pushBoard(); } }
    catch {} finally { syncing = false; }
  }
  async function pull() {
    if (state.provider === "local") return "local";
    try { const remote = await fetchRemote(), local = E.exportState();
      if (!remote) { await push(); return "pushed"; }
      if ((remote.updatedAt || 0) > (local.updatedAt || 0)) { E.importState(remote); return "pulled"; }
      await push(); return "pushed";
    } catch { return "error"; }
  }
  function schedule() { if (state.provider === "local") return; clearTimeout(timer); timer = setTimeout(push, 2500); }
  async function init() {
    E.setSaveHook(schedule);
    if (await initClaude()) { emit(); return pull(); }
    if (APP_CONFIG.firebase) { try { await loadFb(); if (state.provider === "firebase") { emit(); return pull(); } } catch {} }
    emit(); return "local";
  }
  async function signIn(kind, cred = {}) {
    const f = await loadFb(), A = f.au; let c;
    if (kind === "google") c = await A.signInWithPopup(f.auth, new A.GoogleAuthProvider());
    else if (kind === "facebook") c = await A.signInWithPopup(f.auth, new A.FacebookAuthProvider());
    else if (kind === "apple") { const p = new A.OAuthProvider("apple.com"); p.addScope("email"); p.addScope("name"); c = await A.signInWithPopup(f.auth, p); }
    else if (cred.mode === "create") { c = await A.createUserWithEmailAndPassword(f.auth, cred.email, cred.password); if (cred.displayName) await A.updateProfile(c.user, { displayName: cred.displayName }); }
    else c = await A.signInWithEmailAndPassword(f.auth, cred.email, cred.password);
    setFbUser(c.user); emit(); return pull();
  }
  /* Classement mondial : on y apparaît seulement avec un compte, 15 ans ou plus et l'option activée. */
  const eligible = () => { const m = E.S.me; return state.provider === "firebase" && !!m && m.board && m.age >= 15 && !!m.first; };
  const publicName = m => m.first + (m.last ? " " + m.last[0].toUpperCase() + "." : "");
  async function pushBoard() {
    if (state.provider !== "firebase") return; const d = fb.fs.doc(fb.db, "leaderboard", state.user.id);
    if (!eligible()) { try { await fb.fs.deleteDoc(d); } catch {} return; }
    const m = E.S.me; await fb.fs.setDoc(d, { name: publicName(m), photo: m.photo || "", xp: E.S.xp, rank: E.rank().n, level: E.currentLevel(), streak: E.streak(), updatedAt: Date.now() });
  }
  async function leaderboard() {
    const f = await loadFb(); if (state.provider === "firebase") await pushBoard();
    const col = f.fs.collection(f.db, "leaderboard"), snap = await f.fs.getDocs(f.fs.query(col, f.fs.orderBy("xp", "desc"), f.fs.limit(50)));
    const rows = snap.docs.map(d => ({ id: d.id, ...d.data() })); let pos = null;
    if (eligible()) { try { const c = await f.fs.getCountFromServer(f.fs.query(col, f.fs.where("xp", ">", E.S.xp))); pos = c.data().count + 1; } catch {} }
    return { rows, pos, me: state.user ? state.user.id : null };
  }
  async function resetPassword(email) { const f = await loadFb(); await f.au.sendPasswordResetEmail(f.auth, email); }
  async function signOut() { if (state.provider === "firebase") { await fb.au.signOut(fb.auth); state = { provider: "local", user: null }; emit(); } }
  return { init, signIn, signOut, leaderboard, resetPassword, pushBoard, pull, push, get state() { return state; }, get canSignIn() { return !!APP_CONFIG.firebase; }, get providers() { return Object.assign({ google: true, facebook: false, apple: false, email: true }, APP_CONFIG.providers || {}); }, onChange(f) { listeners.push(f); } };
})();
