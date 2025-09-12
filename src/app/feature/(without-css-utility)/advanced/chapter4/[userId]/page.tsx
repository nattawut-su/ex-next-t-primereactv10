import { Result } from './_components/Result';
import { use } from 'react';

export default function ResultPage({ params }: { readonly params: Promise<{ userId: string }> }) {
  const { userId } = use(params);
  return <Result id={userId} />;
}
