const SUPABASE_URL = 'https://mbewxqwdjyjqapxmcsxg.supabase.co';
const SUPABASE_KEY = 'sb_publishable_EVf69i7P2I3JWpmeilR8Vg_l2cvdK7G';

const sbClient = (() => {
  try { return window.supabase?.createClient(SUPABASE_URL, SUPABASE_KEY) || null; }
  catch { return null; }
})();

const sbAuth = {
  async signInWithGoogle() {
    if (!sbClient) return;
    await sbClient.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin + window.location.pathname }
    });
  },
  async signOut() {
    if (!sbClient) return;
    await sbClient.auth.signOut();
  },
  async getUser() {
    if (!sbClient) return null;
    const { data: { user } } = await sbClient.auth.getUser();
    return user;
  },
  onAuthChange(cb) {
    if (!sbClient) return;
    sbClient.auth.onAuthStateChange((_event, session) => cb(session?.user ?? null));
  }
};
