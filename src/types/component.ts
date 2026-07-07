import type React from 'react';
import type { ToastPosition, TypeOptions } from 'react-toastify';

export type Alignment = 'left' | 'center' | 'right';

export type ReactComponentChildren = {
  children: React.ReactNode;
};

export interface DynamicRoute<T = string> {
  validatedParam: T;
}

export interface ToastType {
  text: string;
  type: TypeOptions;
  position?: ToastPosition;
}
