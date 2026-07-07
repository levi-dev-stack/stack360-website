'use client';
import { ToastContainer } from 'react-toastify';

const ToastProvider = () => {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={true}
      newestOnTop={true}
      closeOnClick
      theme="light"
      limit={3}
    />
  );
};

export default ToastProvider;
