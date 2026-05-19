"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

type EntranceContextValue = {
  ready: boolean;
  setReady: () => void;
};

const EntranceContext = createContext<EntranceContextValue>({
  ready: true,
  setReady: () => {},
});

export function EntranceProvider({ children }: { children: React.ReactNode }) {
  const [ready, setReadyState] = useState(true);
  const setReady = useCallback(() => setReadyState(true), []);

  useEffect(() => {
    setReadyState(true);
  }, []);

  return (
    <EntranceContext.Provider value={{ ready, setReady }}>
      {children}
    </EntranceContext.Provider>
  );
}

export function useEntrance() {
  return useContext(EntranceContext);
}
