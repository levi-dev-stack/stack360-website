'use client';

import type { ReactNode } from 'react';
import { MotionSection } from '@/components/shared/motion';

interface OpenRolesSectionProps {
  children: ReactNode;
}

export default function OpenRolesSection({ children }: OpenRolesSectionProps) {
  return (
    <MotionSection className="border-t border-neutral-200 bg-neutral-100/50 py-2xl">
      <div className="site-container">{children}</div>
    </MotionSection>
  );
}
