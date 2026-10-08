export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/' || url.pathname === '/health') {
      const { buildHealthResponse } = await import('./health.js');
      return Response.json(buildHealthResponse());
    }

    return Response.json(
      {
        ok: true,
        message: 'Vyla Stream API is running.',
        path: url.pathname,
      },
      { status: 200 }
    );
  },
};
