if (process.env.NEXT_PUBLIC_USE_MOCK === 'true') {
  import('./browser').then(({ worker }) => {
    worker.start({ onUnhandledRequest: 'bypass' });
  });
}
export {};
