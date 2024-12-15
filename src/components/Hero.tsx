import React from 'react';
import { Heart, Shield, Gift } from 'lucide-react';
import { motion } from 'framer-motion';
import GradientText from './ui/GradientText';
import FeatureCard from './ui/FeatureCard';

const features = [
  {
    icon: Heart,
    title: 'Transparent Giving',
    description: 'Track your donations and see their direct impact through our blockchain-based system',
    iconColor: 'text-primary-400',
    iconBgColor: 'bg-primary-950'
  },
  {
    icon: Shield,
    title: 'Secure Platform',
    description: 'Built on blockchain technology ensuring security and immutability of all transactions',
    iconColor: 'text-primary-400',
    iconBgColor: 'bg-primary-950'
  },
  {
    icon: Gift,
    title: 'Earn Rewards',
    description: 'Get Plix tokens as rewards for your charitable contributions',
    iconColor: 'text-primary-400',
    iconBgColor: 'bg-primary-950'
  }
];

export default function Hero() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl font-bold mb-8"
          >
            <GradientText>Revolutionizing Charitable Giving</GradientText>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-dark-300 mb-16 max-w-2xl mx-auto"
          >
            Plix brings transparency and rewards to charitable donations through blockchain technology
          </motion.p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}