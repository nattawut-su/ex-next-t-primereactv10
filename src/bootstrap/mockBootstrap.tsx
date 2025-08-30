let ready: Promise<void> | null = null;

export async function ensureMocks() {
  if (process.env.NEXT_PUBLIC_USE_MOCK !== 'true') return Promise.resolve();
  if (!ready) {
    const { worker } = await import('../mocks/browser');
    ready = worker.start({ onUnhandledRequest: 'bypass' }).then(() => {
      console.log('MSW ready');
    });
  }
  return ready;
}
