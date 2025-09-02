export function createFetchHttp(baseURL?: string) {
  async function http<T>(path: string, init?: RequestInit): Promise<T> {
    console.log('[FETCH:REQ]', init?.method ?? 'GET', baseURL + path);

    const res = await fetch(`${baseURL}${path}`, {
      headers: { 'Content-Type': 'application/json', ...(init?.headers ?? {}) },
      ...init,
    });
    const ctype = res.headers.get('content-type') ?? '';
    const body = ctype.includes('application/json') ? await res.json() : await res.text();

    console.log('[FETCH:RES]', res.status, baseURL + path);

    if (!res.ok) throw new Error(typeof body === 'string' ? body : JSON.stringify(body));
    return body as T;
  }

  const get = <T>(p: string) => http<T>(p);
  const post = <T>(p: string, data: unknown) => http<T>(p, { method: 'POST', body: JSON.stringify(data) });
  const put = <T>(p: string, data: unknown) => http<T>(p, { method: 'PUT', body: JSON.stringify(data) });
  const del = <T>(p: string) => http<T>(p, { method: 'DELETE' });

  return { get, post, put, del };
}
