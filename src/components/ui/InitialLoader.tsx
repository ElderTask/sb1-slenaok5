import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import GradientText from './GradientText';

export default function InitialLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const prefersReducedMotion = useReducedMotion();
  const hasVisited = localStorage.getItem('hasVisitedBefore');

  useEffect(() => {
    if (hasVisited) {
      setIsLoading(false);
    } else {
      const timer = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem('hasVisitedBefore', 'true');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <img src="/plix-logo.svg" alt="Plix" className="w-24 h-24 mx-auto" />
            </motion.div>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <GradientText className="text-3xl font-bold">
                Revolutionizing Charity
              </GradientText>
            </motion.div>

            {!prefersReducedMotion && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 1.5 }}
                className="mt-6 h-1 w-48 mx-auto bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"
              />
            )}

            <button
              onClick={() => setIsLoading(false)}
              className="mt-6 text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Skip Animation
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}