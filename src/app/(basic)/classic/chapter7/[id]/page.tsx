import { use } from 'react';
import { Result } from './_components/Result';

export default function ResultPage({ params }: { readonly params: Promise<{ id: string }> }) {
  const { id } = use(params);
  return <Result id={id} />;
}
