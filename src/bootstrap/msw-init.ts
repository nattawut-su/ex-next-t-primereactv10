'use client';
if (process.env.NEXT_PUBLIC_USE_MOCK === 'true') {
  import('@/mocks');
}
export default function MswInit() {
  return null;
}
