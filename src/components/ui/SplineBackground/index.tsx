import React, { useState } from 'react';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import SplineScene from './SplineScene';
import ErrorFallback from './ErrorFallback';

export default function SplineBackground() {
  const prefersReducedMotion = useReducedMotion();
  const [hasError, setHasError] = useState(false);

  if (prefersReducedMotion || hasError) {
    return <ErrorFallback />;
  }

  return <SplineScene onError={() => setHasError(true)} />;
}