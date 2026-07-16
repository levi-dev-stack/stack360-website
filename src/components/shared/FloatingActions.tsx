'use client';

import ChatAssistant from '@/components/shared/ChatAssistant';

/** Shared fixed column for guide + scroll controls — keeps both center-aligned. */
export default function FloatingActions() {
  return (
    <div className="pointer-events-none fixed bottom-8 right-8 z-60 flex w-14 flex-col items-center gap-md sm:bottom-10 sm:right-10">
      <ChatAssistant />
    </div>
  );
}
