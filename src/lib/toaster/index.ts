import { type ToastOptions, toast } from 'react-toastify';
import type { ToastType } from '@/types/component';

export const showToast = ({ text, type, position }: ToastType) => {
  if (typeof window === 'undefined') {
    return;
  }

  const toastDefaultSetting: ToastOptions = {
    position: position || 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
  };

  if (type === 'default' || !type) {
    toast(text, toastDefaultSetting);
  } else if (typeof toast[type] === 'function') {
    toast[type](text, toastDefaultSetting);
  } else {
    toast(text, toastDefaultSetting);
  }
};
