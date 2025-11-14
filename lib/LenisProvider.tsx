"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // Adjust speed
      smooth: true,
      smoothTouch: false, // disable on mobile if needed
      direction: "vertical",
      gestureDirection: "vertical",
      lerp: 0.1,
      wheelMultiplier: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useLenis();
  return <>{children}</>; 
}
