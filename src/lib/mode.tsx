"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type DisplayMode = "flavor" | "data";

const KEY = "cottage.mode";

const ModeContext = createContext<{
  mode: DisplayMode;
  setMode: (m: DisplayMode) => void;
}>({ mode: "flavor", setMode: () => {} });

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<DisplayMode>("flavor");

  useEffect(() => {
    const stored = localStorage.getItem(KEY) as DisplayMode | null;
    if (stored === "flavor" || stored === "data") setMode(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY, mode);
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  return useContext(ModeContext);
}

/** Pick between flavor and data values based on current mode. */
export function useText<T>(flavor: T, data: T): T {
  const { mode } = useMode();
  return mode === "flavor" ? flavor : data;
}
