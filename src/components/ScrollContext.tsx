import { createContext, useContext, useEffect, useState } from "react"
import type { ReactNode } from "react";
import Lenis from 'lenis'

// 1. Provide a type for the context value
type SmoothScrollerContextType = Lenis | null;

const SmoothScrollerContext = createContext<SmoothScrollerContextType>(null);

// 2. Custom hook
export const useSmoothScroller = () => useContext(SmoothScrollerContext)

// 3. Props type for the provider
interface ScrollContextProps {
  children: ReactNode;
}

const ScrollContext: React.FC<ScrollContextProps> = ({ children }) => {
  const [lenisRef, setLenis] = useState<Lenis | null>(null);
  const [rafState, setRaf] = useState<number | null>(null);

  useEffect(() => {
    const scroller = new Lenis();

    const raf = (time: number) => {
      scroller.raf(time);
      requestAnimationFrame(raf);
    }

    const rf = requestAnimationFrame(raf);
    setRaf(rf);
    setLenis(scroller);

    return () => {
      if (lenisRef) {
        if (rafState) cancelAnimationFrame(rafState);
        lenisRef.destroy(); // Lenis has a destroy method
      }
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // only run once

  return (
    <SmoothScrollerContext.Provider value={lenisRef}>
      {children}
    </SmoothScrollerContext.Provider>
  )
}

export default ScrollContext