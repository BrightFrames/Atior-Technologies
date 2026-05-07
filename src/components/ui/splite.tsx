"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Spline = dynamic(() => import("@splinetool/react-spline"), { ssr: false });

type SplineSceneProps = {
  scene: string;
  className?: string;
};

export function SplineScene({ scene, className = "" }: SplineSceneProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const animationFrame = window.requestAnimationFrame(() => setIsMounted(true));
    return () => window.cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className={`relative ${className}`}>
      {isMounted ? (
        <Spline scene={scene} className="h-full w-full" />
      ) : (
        <div className="h-full w-full rounded-[28px] border border-[#25304a] bg-[#09101d]" />
      )}
    </div>
  );
}
