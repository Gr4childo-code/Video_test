'use client';

import { makeStore, AppStore } from '@/lib/store/store';
import { Provider } from 'react-redux';
import { ReactNode, useRef } from 'react';

interface ReduxProviderProps {
  children: ReactNode;
}

export default function ReduxProvider({ children }: ReduxProviderProps) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}
