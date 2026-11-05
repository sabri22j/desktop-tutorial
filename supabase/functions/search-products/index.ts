import { createHash } from 'node:crypto';

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const TOP_URL = 'https://eco.taobao.com/router/rest';
const ITEM_FIELDS = 'num_iid,title,pict_url,small_images,reserve_price,zk_final_price,volume,nick,item_url';

const reply = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...CORS, 'Content-Type': 'application/json' } });

const toNumber = (v: unknown) => {
  const n = parseFloat(String(v ?? ''));
  return Number.isFinite(n) ? n : null;
};

const toHttps = (s: string) => (s.startsWith('//') ? 'https:' + s : s);

function timestamp() {
  return new Date(Date.now() + 8 * 3600_000).toISOString().slice(0, 19).replace('T', ' ');
}

function sign(params: Record<string, string>, secret: string) {
  const body = Object.keys(params).sort().map((k) => k + params[k]).join('');
  return createHash('md5').update(secret + body + secret).digest('hex').toUpperCase();
}

async function callTop(method: string, params: Record<string, string>) {
  const appKey = Deno.env.get('TB_APP_KEY');
  const appSecret = Deno.env.get('TB_APP_SECRET');
  if (!appKey || !appSecret) throw new Error('not_configured');
  const all: Record<string, string> = {
    app_key: appKey,
    method,
    timestamp: timestamp(),
    format: 'json',
    v: '2.0',
    sign_method: 'md5',
    ...params,
  };
  all.sign = sign(all, appSecret);
  const res = await fetch(TOP_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' },
    body: new URLSearchParams(all),
  });
  return res.json();
}

function normalize(it: any) {
  const id = String(it.item_id ?? it.num_iid ?? '');
  const images: string[] = [it.pict_url, ...(it.small_images?.string ?? [])].filter(Boolean).map(toHttps);
  return {
    id,
    title: it.title ?? '',
    image: images[0] ?? null,
    images,
    originalPrice: toNumber(it.reserve_price),
    promoPrice: toNumber(it.zk_final_price),
    sales: it.volume ?? null,
    shop: it.nick ?? null,
    url: it.item_url ? toHttps(it.item_url) : `https://item.taobao.com/item.htm?id=${id}`,
  };
}

function itemIdFromLink(raw: string) {
  const u = new URL(raw);
  if (!/(^|\.)(taobao|tmall)\.(com|hk)$/i.test(u.hostname)) return null;
  return u.searchParams.get('id') || u.searchParams.get('itemId') || null;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  try {
    const { q, url } = await req.json();

    if (url) {
      const id = itemIdFromLink(url);
      if (!id) return reply({ error: 'unsupported_link' }, 400);
      const r = await callTop('taobao.tbk.item.info.get', { num_iids: id, platform: '2', fields: ITEM_FIELDS });
      if (r.error_response) {
        return reply({ error: 'api_error', message: r.error_response.sub_msg ?? r.error_response.msg }, 502);
      }
      const list = r.tbk_item_info_get_response?.results?.n_tbk_item ?? [];
      if (!list.length) return reply({ error: 'not_found' }, 404);
      return reply({ items: list.map(normalize) });
    }

    if (q) {
      const adzoneId = Deno.env.get('TB_ADZONE_ID');
      if (!adzoneId) return reply({ error: 'not_configured' }, 503);
      const r = await callTop('taobao.tbk.dg.material.optional', {
        q: String(q),
        adzone_id: adzoneId,
        material_id: '2',
        platform: '2',
        page_no: '1',
        page_size: '20',
      });
      if (r.error_response) {
        return reply({ error: 'api_error', message: r.error_response.sub_msg ?? r.error_response.msg }, 502);
      }
      const list = r.tbk_dg_material_optional_response?.result_list?.map_data ?? [];
      return reply({ items: list.map(normalize) });
    }

    return reply({ error: 'missing_input' }, 400);
  } catch (e) {
    if (e.message === 'not_configured') return reply({ error: 'not_configured' }, 503);
    return reply({ error: 'server_error', message: e.message }, 500);
  }
});
