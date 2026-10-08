import VylaSDK from './sdk.js';

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'content-type, authorization',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
};

function reply(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', ...cors },
  });
}

function auth(request, env) {
  if (!env.API_TOKEN) return true;
  return request.headers.get('Authorization') === `Bearer ${env.API_TOKEN}`;
}

function input(url) {
  const type = (url.searchParams.get('type') || 'movie').toLowerCase();
  const id = url.searchParams.get('id');
  const season = url.searchParams.get('season');
  const episode = url.searchParams.get('episode');
  if (!/^\d+$/.test(id || '') || !['movie', 'tv'].includes(type)) return null;
  if (type === 'tv' && (!/^\d+$/.test(season || '') || !/^\d+$/.test(episode || ''))) return null;
  return { type, id, season: season ? Number(season) : null, episode: episode ? Number(episode) : null };
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    const url = new URL(request.url);
    if (!auth(request, env)) return reply({ ok: false, error: 'unauthorized' }, 401);
    if (url.pathname === '/health') return reply({ ok: true, runtime: 'cloudflare-workers' });
    if (url.pathname === '/sources') {
      const sdk = new VylaSDK({ tmdbApiKey: env.TMDB_API_KEY });
      return reply({ ok: true, sources: sdk.getSources(true).map(({ key, label, multiUrl, disabled }) => ({ key, label, multiUrl, disabled: !!disabled })) });
    }
    if (url.pathname !== '/stream') return reply({ ok: false, error: 'not_found' }, 404);
    const value = input(url);
    if (!value) return reply({ ok: false, error: 'Use ?id=TMDB_ID&type=movie or ?id=TMDB_ID&type=tv&season=1&episode=1' }, 400);
    const sdk = new VylaSDK({ tmdbApiKey: env.TMDB_API_KEY });
    const requested = url.searchParams.get('source');
    const keys = requested ? [requested] : sdk.getSources(true).map(x => x.key);
    const results = [];
    const clientIP = request.headers.get('CF-Connecting-IP');
    const runOne = async (key) => {
      try {
        const result = await sdk.getStream(key, value.id, value.season, value.episode, clientIP);
        return result ? { source: key, ok: true, result } : { source: key, ok: false, error: 'no_stream' };
      } catch (error) {
        return { source: key, ok: false, error: error instanceof Error ? error.message : String(error) };
      }
    };
    // Batch requests to avoid creating a burst against every provider at once.
    for (let i = 0; i < keys.length; i += 6) {
      results.push(...await Promise.all(keys.slice(i, i + 6).map(runOne)));
    }
    return reply({ ok: true, media: value, requested_sources: keys.length, success_count: results.filter(x => x.ok).length, results });
  },
};
