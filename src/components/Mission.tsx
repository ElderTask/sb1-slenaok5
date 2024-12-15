import React from 'react';
import { Heart, Target, Award, BarChart3, Users, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import GradientText from './ui/GradientText';
import CharityPartners from './CharityPartners';

// ... (keep existing imports and constants)

export default function Mission() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ... (keep existing content until the Call to Action section) */}

        {/* Replace the Call to Action with CharityPartners */}
        <CharityPartners />
      </div>
    </section>
  );
}