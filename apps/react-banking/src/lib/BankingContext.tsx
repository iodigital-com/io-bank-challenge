'use client';

import { createContext } from 'react';

export const BankingContext = createContext<any>(null);

export function BankingProvider({ children }: { children: React.ReactNode }) {
  return (
    <BankingContext.Provider value={{}}>
      {children}
    </BankingContext.Provider>
  );
}

