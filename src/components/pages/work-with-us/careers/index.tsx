import { Suspense } from 'react';
import OpenRolesSkeleton from '@/components/layout/Loading/open-role-skeleton';
import PageClosingCta from '@/components/shared/PageClosingCta';
import PageHero from '@/components/shared/PageHero';
import { CAREERS_CTA, CAREERS_HERO } from '@/constants/component/careers-data';
import OpenRoles from './open-roles';

export default function CareersPage() {
  return (
    <div className="flex w-full flex-col">
      <PageHero
        eyebrow={CAREERS_HERO.eyebrow}
        title={CAREERS_HERO.title}
        highlight={CAREERS_HERO.highlight}
        description={CAREERS_HERO.description}
      />

      <Suspense fallback={<OpenRolesSkeleton />}>
        <OpenRoles />
      </Suspense>

      <PageClosingCta {...CAREERS_CTA} />
    </div>
  );
}
