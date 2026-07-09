import FloatingObject from '@/components/shared/FloatingObjects';

export default function CodeSnippet() {
  return (
    <FloatingObject
      className="left-0 top-[19%]"
      floatY={[0, -8, 0]}
      floatDuration={6.4}
      contentClassName="-rotate-1 rounded-md border border-neutral-200 bg-neutral-50/85 p-sm shadow-sm backdrop-blur-sm"
    >
      <pre className="font-mono text-[10px] leading-snug text-neutral-400">
        <span className="text-neutral-500">const</span> stack ={' '}
        <span className="text-primary">new</span> Stack360();{'\n'}
        stack.deploy();
      </pre>
    </FloatingObject>
  );
}
