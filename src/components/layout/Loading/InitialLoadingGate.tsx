'use client';

import { useEffect, useState } from 'react';
import InitialLoadingScreen from './InitialLoadingScreen';

export default function InitialLoadingGate({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      {ready ? null : (
        <div className="initial-load-gate fixed inset-0 z-100">
          <InitialLoadingScreen />
        </div>
      )}
      {children}
    </>
  );
}
