interface WorkInProgressProps {
  title?: string;
  description?: string;
}

export default function WorkInProgress({
  title = 'Work in Progress',
  description = "This page is being architected. Check back soon — we're building something worth the wait.",
}: WorkInProgressProps) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-md py-2xl text-center">
      <span className="mb-md inline-flex items-center gap-xs rounded-sm border border-primary-tint bg-primary-tint/20 px-md py-xs text-xs font-bold uppercase tracking-widest text-primary-dark">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
        Under Construction
      </span>

      <h1 className="max-w-xl text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
        {title}
      </h1>

      <p className="mt-sm max-w-md text-sm leading-relaxed text-neutral-500">{description}</p>

      <a
        href="/"
        className="mt-lg inline-flex items-center text-sm font-bold text-primary transition-colors hover:text-primary-dark"
      >
        <span className="mr-xs">←</span>
        Back to Home
      </a>
    </div>
  );
}
