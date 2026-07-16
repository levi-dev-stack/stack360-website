'use client';

import ChatAssistant from '@/components/shared/ChatAssistant';

/** Fixed bottom-right anchor for guide + scroll (scroll lives inside chat stack). */
export default function FloatingActions() {
  return (
    <div className="pointer-events-none fixed bottom-8 right-8 z-60 sm:bottom-10 sm:right-10">
      <ChatAssistant />
    </div>
  );
}
