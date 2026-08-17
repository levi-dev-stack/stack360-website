import RoutingProgressBar from '@/providers/routing-progress-provider';
import SameRouteScrollToTop from '@/providers/same-route-scroll-provider';
import type { ReactComponentChildren } from '@/types/component';
import ToastProvider from './toast-provider';

const Providers = ({ children }: ReactComponentChildren) => {
  return (
    <>
      <RoutingProgressBar />
      <SameRouteScrollToTop />
      {children}
      <ToastProvider />
    </>
  );
};

export default Providers;
