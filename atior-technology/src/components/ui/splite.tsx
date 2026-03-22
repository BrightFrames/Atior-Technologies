'use client'

import React, { Component, ReactNode, Suspense, useState, useRef, useEffect } from 'react';
import dynamic from 'next/dynamic'
import { useInView } from 'framer-motion';

// Use dynamic import for client-side loading
const Spline = dynamic(() => import('@splinetool/react-spline'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-transparent">
        {/* Placeholder or subtle loader if needed */}
    </div>
  )
})

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: () => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class SplineErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Spline Component Error:", error, errorInfo);
    if (this.props.onError) {
      this.props.onError();
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      // "Serious" mode: Don't show ugly error boxes.
      // Ideally, show a static image fallback, but since we don't have one,
      // fail gracefully (invisible) or show a minimal icon.
      // For now, let's keep it invisible to avoid "college project" look.
      return null;
    }

    return this.props.children;
  }
}

interface SplineSceneProps {
  scene: string
  className?: string
  onLoad?: (spline: any) => void
  priority?: boolean // If true, loads immediately. If false, lazy loads.
}

export function SplineScene({ scene, className, onLoad, priority = false }: SplineSceneProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "200px" });

  const shouldRender = priority || isInView;

  const handleLoad = (spline: any) => {
    // Small delay to ensure canvas is ready before revealing
    setTimeout(() => {
      setIsLoaded(true);
      if (onLoad) {
        onLoad(spline);
      }
    }, 200);
  };

  return (
    <div ref={containerRef} className={className}>
      <SplineErrorBoundary onError={() => onLoad?.(null)}>
        {shouldRender && (
        <div 
          className="w-full h-full transition-opacity duration-1000 ease-out"
          style={{ opacity: isLoaded ? 1 : 0 }}
        >
          <Spline 
            scene={scene}
            className="w-full h-full"
            onLoad={handleLoad}
          />
        </div>
        )}
      </SplineErrorBoundary>
    </div>
  )
}

