import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return new Response('Missing url', { status: 400 });
  }

  try {
    const res = await fetch(url, {
      // Ask upstream to send uncompressed to avoid double-decoding issues
      headers: { 'accept-encoding': 'identity' },
      cache: 'no-store',
    });
    if (!res.ok) {
      return new Response('Upstream error', { status: 502 });
    }

    // Clone headers and force inline disposition for iframe
    const headers = new Headers(res.headers);
    headers.set('content-disposition', 'inline');
    headers.delete('content-encoding');
    headers.delete('content-length');
    headers.delete('transfer-encoding');

    return new Response(res.body, {
      status: res.status,
      headers,
    });
  } catch (e) {
    return new Response('Proxy error', { status: 500 });
  }
}
