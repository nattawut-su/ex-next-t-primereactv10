'use client';
import { memo, useMemo, useState } from 'react';

// 1) ห่อด้วย React.memo
const Child = memo(function Child({ config }: { config: { theme: string } }) {
  console.log('Child render', config.theme);
  return (
    <div>
      <p>Theme: {config.theme}</p>
    </div>
  );
});

export default function DemoWithMemo() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [count, setCount] = useState(0);

  const config = useMemo(() => ({ theme }), [theme]);

  return (
    <>
      <Child config={config} />
      <button onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}>Toggle Theme</button>
      <button onClick={() => setCount((c) => c + 1)}>Increase Count</button>
      <p>Count: {count}</p>
    </>
  );
}
