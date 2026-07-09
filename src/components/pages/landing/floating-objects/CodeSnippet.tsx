import FloatingObject from '@/components/shared/FloatingObjects';

export default function CodeSnippet() {
  return (
    <FloatingObject
      className="left-[5%] top-[16%] xl:left-[7%]"
      floatY={[0, -14, 0]}
      floatDuration={6}
      contentClassName="rounded-lg border border-neutral-200 bg-neutral-50/80 p-md shadow-card backdrop-blur-sm"
    >
      <pre className="font-mono text-xs leading-relaxed text-neutral-400">
        <span className="text-neutral-500">const</span> engine ={' '}
        <span className="text-primary">new</span> Stack360();{'\n'}
        {'  '}engine.scale(<span className="text-primary-dark">&apos;unlimited&apos;</span>);
        {'\n'}
        {'  '}engine.deploy();
      </pre>
    </FloatingObject>
  );
}
