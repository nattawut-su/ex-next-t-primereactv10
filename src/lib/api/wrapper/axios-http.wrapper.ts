import axios, { AxiosInstance } from 'axios';

export function createAxiosHttp(baseURL?: string, defaultHeaders?: Record<string, string>): AxiosInstance {
  const instance = axios.create({
    baseURL: baseURL,
    timeout: 15000,
    headers: {
      'Content-Type': 'application/json',
      ...defaultHeaders,
    },
  });

  instance.interceptors.request.use((cfg) => {
    // ใส่ token/log ได้
    Object.assign(cfg.headers ?? {}, defaultHeaders ?? {});
    console.log('[AXIOS:REQ]', cfg.method?.toUpperCase(), cfg.url, cfg.headers);
    return cfg;
  });

  instance.interceptors.response.use(
    (r) => {
      console.log('[AXIOS:RES]', r.status);
      return r;
    },
    (err) => {
      console.warn('[AXIOS:ERR]', err?.response?.status);
      let errorToReject;
      if (err instanceof Error) {
        errorToReject = err;
      } else if (typeof err === 'string') {
        errorToReject = new Error(err);
      } else {
        errorToReject = new Error(JSON.stringify(err));
      }
      return Promise.reject(errorToReject);
    },
  );

  return instance;
}
