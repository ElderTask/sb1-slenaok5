import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import LoadingFallback from './LoadingFallback';
import ErrorFallback from './ErrorFallback';
import './styles.css';

interface SplineSceneProps {
  onError?: () => void;
}

export default function SplineScene({ onError }: SplineSceneProps) {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950/90 via-dark-900/95 to-dark-950/90 mix-blend-multiply pointer-events-none" />
        <div className="spline-canvas-container w-full h-full">
          <Spline
            className="w-full h-full opacity-50"
            scene="https://prod.spline.design/pT7zn6hw9bvGgzTN/scene.splinecode"
            onError={onError}
          />
        </div>
      </div>
    </Suspense>
  );
}