import React from 'react';
import { MessageCircle, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import GradientText from './ui/GradientText';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full top-0 bg-dark-900/80 backdrop-blur-md z-50 border-b border-dark-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center"
          >
            <img 
              src="https://cdn.discordapp.com/attachments/1039943637502533703/1317697305343688764/plix_small.jpg?ex=675fa0bf&is=675e4f3f&hm=16dbbf9a397cd157f8e26c28ec032eda029f8ab16297a19044a66eebcf3b03a2" 
              alt="Plix Logo" 
              className="h-8 w-auto"
            />
            <GradientText className="ml-2 text-xl font-bold">
              Plix
            </GradientText>
          </motion.div>
          
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-6"
          >
            <a 
              href="https://t.me/plixworld" 
              className="flex items-center space-x-2 text-dark-300 hover:text-primary-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-sm">Telegram</span>
              <MessageCircle className="h-5 w-5" />
            </a>
            <a 
              href="https://x.com/plixdotfun" 
              className="flex items-center space-x-2 text-dark-300 hover:text-primary-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-sm">Twitter</span>
              <Twitter className="h-5 w-5" />
            </a>
            <a 
              href="https://t.me/plixworld"
              target="_blank"
              rel="noopener noreferrer" 
              className="font-bold px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Join Our Community
            </a>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}