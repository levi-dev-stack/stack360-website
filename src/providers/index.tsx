import RoutingProgressBar from '@/providers/routing-progress-provider';
import type { ReactComponentChildren } from '@/types/component';
import ToastProvider from './toast-provider';

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
