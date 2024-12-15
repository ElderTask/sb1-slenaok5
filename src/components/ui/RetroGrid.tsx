import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function RetroGrid() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      <div className="absolute inset-0 bg-dark-950">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/grid.svg)',
            backgroundSize: '50px 50px',
            backgroundRepeat: 'repeat',
          }}
        />
        {!prefersReducedMotion && (
          <motion.div
            initial={{ opacity: 0, y: '0%' }}
            animate={{ opacity: [0, 0.3, 0], y: ['0%', '100%'] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="absolute inset-0 bg-gradient-to-b from-primary-500/0 via-primary-500/10 to-primary-500/0"
          />
        )}
      </div>
    </div>
  );
}