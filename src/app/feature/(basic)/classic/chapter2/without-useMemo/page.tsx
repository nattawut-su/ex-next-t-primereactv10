'use client';
import { useState } from 'react';

function Child({ config }: { readonly config: { readonly theme: string } }) {
  console.log('Child render');
  return <p>Theme: {config.theme}</p>;
}

export default function WithoutMemo() {
  const [theme, setTheme] = useState('light');
  const [count, setCount] = useState(0);

  const config = { theme };

  return (
    <>
      <Child config={config} />
      <button onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}>Toggle Theme</button>
      <button onClick={() => setCount((c) => c + 1)}>Increase Count</button>
      <p>Count: {count}</p>
    </>
  );
}
