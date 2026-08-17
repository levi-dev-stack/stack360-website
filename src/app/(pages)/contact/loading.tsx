import { ContactSkeleton } from '@/components/layout/Loading/ContactSkeleton';
import GeneralLoadingScreen from '@/components/layout/Loading/GeneralLoadingScreen';

export default function Loading() {
  return (
    <>
      <GeneralLoadingScreen hideBody={true} />
      <ContactSkeleton />
    </>
  );
}
