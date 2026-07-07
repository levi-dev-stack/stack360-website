import type { ReactComponentChildren } from '@/types/component';
import ToastProvider from './toast-provider';

const Providers = ({ children }: ReactComponentChildren) => {
  return (
    <>
      {children}
      <ToastProvider />
    </>
  );
};

export default Providers;
