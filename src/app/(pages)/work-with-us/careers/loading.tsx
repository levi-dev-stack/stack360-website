import GeneralLoadingScreen from '@/components/layout/Loading/GeneralLoadingScreen';
import OpenRolesSkeleton from '@/components/layout/Loading/open-role-skeleton';

export default function Loading() {
  return (
    <>
      <GeneralLoadingScreen hideBody />
      <OpenRolesSkeleton />
    </>
  );
}
