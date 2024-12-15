import React from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function AnimatedBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className={`
        absolute inset-0 
        bg-gradient-to-br from-purple-50/80 via-white/90 to-blue-50/80
        ${!prefersReducedMotion && 'animate-gradient-shift'}
      `}>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      </div>
      {!prefersReducedMotion && (
        <>
          <div className="absolute -top-48 -left-48 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
          <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
        </>
      )}
    </div>
  );
}