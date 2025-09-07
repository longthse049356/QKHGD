import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return new Response('Missing url', { status: 400 });
  }

  try {
    const res = await fetch(url);
    if (!res.ok) {
      return new Response('Upstream error', { status: 502 });
    }

    // Clone headers and force inline disposition for iframe
    const headers = new Headers(res.headers);
    headers.set('content-disposition', 'inline');

    return new Response(res.body, {
      status: res.status,
      headers,
    });
  } catch (e) {
    return new Response('Proxy error', { status: 500 });
  }
}
