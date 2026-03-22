'use client'

import React, { Component, ReactNode, Suspense } from 'react';
import dynamic from 'next/dynamic'

// Use dynamic import for client-side loading
const Spline = dynamic(() => import('@splinetool/react-spline'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <span className="loader"></span>
    </div>
  )
})

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
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
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs text-center p-4 border border-dashed border-gray-300 rounded-lg">
          <p>
            3D Graphics Currently Unavailable.<br/>
            Please restart your browser to view the interactive scene.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <div className={className}>
      <SplineErrorBoundary>
        <Spline 
          scene={scene}
          className="w-full h-full"
        />
      </SplineErrorBoundary>
    </div>
  )
}

