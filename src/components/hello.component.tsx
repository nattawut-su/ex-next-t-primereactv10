interface HelloProps {
  readonly name: string;
}

export function Hello({ name }: HelloProps) {
  return (
    <div style={{ border: '1px solid red', padding: 10, margin: 10, width: '100%' }}>
      <h1>Hello {name}</h1>
    </div>
  );
}
