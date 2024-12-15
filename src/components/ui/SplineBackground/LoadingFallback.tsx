import React from 'react';

export default function LoadingFallback() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 animate-pulse" />
    </div>
  );
}