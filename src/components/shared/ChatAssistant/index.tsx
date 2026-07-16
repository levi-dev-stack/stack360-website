'use client';

import { Loader2 } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

function AssistantFabFallback() {
  return (
    <div
      aria-hidden
      className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-neutral-50 shadow-card"
    >
      <Loader2 size={22} className="animate-spin" />
      <span className="sr-only">Loading Stack360 Guide…</span>
    </div>
  );
}

const ChatAssistantPanel = dynamic(() => import('./ChatAssistantPanel'), {
  ssr: false,
  loading: () => <AssistantFabFallback />,
});

export default function ChatAssistant() {
  return (
    <Suspense fallback={<AssistantFabFallback />}>
      <ChatAssistantPanel />
    </Suspense>
  );
}
