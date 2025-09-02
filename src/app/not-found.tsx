import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl p-10 text-center">
      <h1 className="text-4xl font-bold">404 — Page Not Found</h1>
      <p className="mt-3 text-muted-foreground">ขออภัย ไม่พบหน้าที่คุณต้องการ</p>
      <div className="mt-6">
        <Link
          href="/"
          className="inline-block rounded-lg px-4 py-2 border hover:bg-gray-50"
        >
          กลับหน้าแรก
        </Link>
      </div>
    </main>
  );
}
