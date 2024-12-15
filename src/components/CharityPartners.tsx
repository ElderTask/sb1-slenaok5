import React from 'react';
import { motion } from 'framer-motion';
import GradientText from './ui/GradientText';

const charityPartners = [
  {
    name: 'UNICEF',
    logo: 'https://cdn.discordapp.com/attachments/1039943637502533703/1317748716169596928/LmpwZw.png?ex=675fd0a0&is=675e7f20&hm=258f157a2079dbe16d42cc13af3dcc5a56d5ff4ab87491e1a01c8204a4fb55be',
    description: "Working in 190 countries for children's rights"
  },
  {
    name: 'Red Cross',
    logo: 'https://www.gannett-cdn.com/-mm-/e00f94b20f79ff3c29a45364da839ce75c16d8c8/c=0-3-639-364/local/-/media/2016/04/18/LAGroup/Alexandria/635965999599044155-american-red-cross.jpeg?width=3200&height=1680&fit=crop',
    description: 'Emergency response and humanitarian aid'
  },
  {
    name: 'WWF',
    logo: 'https://cdn.discordapp.com/attachments/1039943637502533703/1317748876136022159/NDQ4eDUwMC5qcGc.png?ex=675fd0c6&is=675e7f46&hm=64a64edd467843351e45f3811fbceedb09c6bef0f1ed304754e637e26ff1e537',
    description: 'Conservation and reducing human impact'
  }
];

interface CharityCardProps {
  name: string;
  logo: string;
  description: string;
  index: number;
}

function CharityCard({ name, logo, description, index }: CharityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
      className="group relative bg-dark-900/50 backdrop-blur-lg rounded-xl p-6 border border-dark-800 hover:border-primary-500/30 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/0 to-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
      <div className="relative z-10">
        <div className="w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden">
          <img
            src={logo}
            alt={name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <h4 className="text-lg font-semibold text-center mb-2 text-gray-100">{name}</h4>
        <p className="text-dark-300 text-sm text-center">{description}</p>
      </div>
    </motion.div>
  );
}

export default function CharityPartners() {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h3 className="text-2xl font-bold mb-4">
          <GradientText>Our Charity Partners</GradientText>
        </h3>
        <p className="text-dark-300">Working with trusted organizations to make a real difference</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {charityPartners.map((charity, index) => (
          <CharityCard key={index} {...charity} index={index} />
        ))}
      </div>
    </div>
  );
}