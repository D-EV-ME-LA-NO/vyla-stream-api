export function buildHealthResponse() {
  return {
    ok: true,
    service: 'vyla-stream-api',
    status: 'healthy',
    timestamp: new Date().toISOString(),
  };
}
