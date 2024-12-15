import React, { Suspense, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function SplineBackground() {
  const prefersReducedMotion = useReducedMotion();
  const [hasError, setHasError] = useState(false);

  if (prefersReducedMotion || hasError) {
    return (
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950" />
    );
  }

  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950/90 via-dark-900/95 to-dark-950/90 mix-blend-multiply pointer-events-none" />
      <Suspense fallback={
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 animate-pulse" />
      }>
        <Spline
          className="w-full h-full opacity-50"
          scene="https://prod.spline.design/pT7zn6hw9bvGgzTN/scene.splinecode"
          onError={() => setHasError(true)}
        />
      </Suspense>
    </div>
  );
}