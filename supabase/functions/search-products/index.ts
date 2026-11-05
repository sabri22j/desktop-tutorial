const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const ACTOR = 'sinodata~taobao-product-search';

const reply = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...CORS, 'Content-Type': 'application/json' } });

const toNumber = (v: unknown) => {
  const n = parseFloat(String(v ?? ''));
  return Number.isFinite(n) ? n : null;
};

const toHttps = (s: string) => (s.startsWith('//') ? 'https:' + s : s);

function normalize(it: any) {
  const id = String(it.itemId ?? '');
  const image = it.imageUrl ? toHttps(it.imageUrl) : null;
  return {
    id,
    title: it.title ?? '',
    image,
    images: image ? [image] : [],
    originalPrice: toNumber(it.originalPrice),
    promoPrice: toNumber(it.price),
    sales: null,
    shop: it.shopName ?? null,
    url: it.url ?? `https://item.taobao.com/item.htm?id=${id}`,
  };
}

function isTaobaoLink(raw: string) {
  try {
    return /(^|\.)(taobao|tmall)\.(com|hk)$/i.test(new URL(raw).hostname);
  } catch {
    return false;
  }
}

async function runActor(input: Record<string, unknown>): Promise<any[]> {
  const token = Deno.env.get('APIFY_TOKEN');
  if (!token) throw new Error('not_configured');
  const res = await fetch(`https://api.apify.com/v2/acts/${ACTOR}/run-sync-get-dataset-items`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify(input),
  });
  const data = await res.json().catch(() => null);
  if (!res.ok) throw new Error('apify:' + (data?.error?.message ?? `HTTP ${res.status}`));
  return Array.isArray(data) ? data : [];
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  try {
    const { q, url } = await req.json();

    if (url) {
      if (!isTaobaoLink(url)) return reply({ error: 'unsupported_link' }, 400);
      const items = await runActor({ items: [url] });
      const detail = items.find((it: any) => it.type === 'productDetail' && it.title);
      if (!detail) return reply({ error: 'not_found' }, 404);
      return reply({ items: [normalize(detail)] });
    }

    if (q) {
      const items = await runActor({ keywords: [String(q)] });
      const list = items.filter((it: any) => it.type === 'product' && it.itemId);
      return reply({ items: list.map(normalize) });
    }

    return reply({ error: 'missing_input' }, 400);
  } catch (e) {
    if (e.message === 'not_configured') return reply({ error: 'not_configured' }, 503);
    if (e.message.startsWith('apify:')) return reply({ error: 'api_error', message: e.message.slice(6) }, 502);
    return reply({ error: 'server_error', message: e.message }, 500);
  }
});
