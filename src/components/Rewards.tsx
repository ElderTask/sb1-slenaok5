import React from 'react';
import { Coins, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import GradientText from './ui/GradientText';

export default function Rewards() {
  return (
    <div className="py-20 bg-dark-950/50 backdrop-blur-lg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <GradientText>Earn While You Give</GradientText>
          </h2>
          <p className="text-xl text-dark-300">Get rewarded with Plix tokens for your charitable contributions</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4 bg-dark-900/50 p-6 rounded-xl border border-dark-800 hover:border-primary-500/50 transition-colors duration-300">
              <div className="flex-shrink-0">
                <Coins className="h-6 w-6 text-primary-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-100">Token Rewards</h3>
                <p className="text-dark-300">Receive Plix tokens proportional to your donation amount</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 bg-dark-900/50 p-6 rounded-xl border border-dark-800 hover:border-primary-500/50 transition-colors duration-300">
              <div className="flex-shrink-0">
                <ArrowRight className="h-6 w-6 text-primary-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-100">Staking Benefits</h3>
                <p className="text-dark-300">Stake your Plix tokens to earn additional rewards and voting rights</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-dark-900/90 p-8 rounded-xl border border-dark-800">
              <h3 className="text-2xl font-bold mb-8 text-gray-100">Reward Tiers</h3>
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="flex justify-between items-center p-4 bg-dark-800/50 rounded-lg"
                >
                  <span className="text-dark-200">$100 Donation</span>
                  <span className="text-primary-400 font-semibold">100 PLIX</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="flex justify-between items-center p-4 bg-dark-800/50 rounded-lg"
                >
                  <span className="text-dark-200">$500 Donation</span>
                  <span className="text-primary-400 font-semibold">600 PLIX</span>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  className="flex justify-between items-center p-4 bg-dark-800/50 rounded-lg"
                >
                  <span className="text-dark-200">$1000 Donation</span>
                  <span className="text-primary-400 font-semibold">1500 PLIX</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}