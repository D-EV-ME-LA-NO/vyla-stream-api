export function getUA() {
  return 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
}

export async function createStreamArgs(sdk, cfg, id, s, e, clientIP) {
  return {
    id,
    s,
    e,
    clientIP,
    sdk,
    config: cfg,
  };
}
