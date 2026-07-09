import type { ReactComponentChildren } from '@/types/component';
import ToastProvider from './toast-provider';
import RoutingProgressBar from '@/providers/routing-progress-provider';

const Providers = ({ children }: ReactComponentChildren) => {
  return (
    <>
      <RoutingProgressBar />
      {children}
      <ToastProvider />
    </>
  );
};

export default Providers;
