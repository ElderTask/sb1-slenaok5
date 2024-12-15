import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
  iconBgColor: string;
}

export default function FeatureCard({ icon: Icon, title, description, iconColor, iconBgColor }: FeatureCardProps) {
  return (
    <div className="group relative">
      {/* Animated border gradient */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-primary-400 rounded-xl opacity-30 group-hover:opacity-100 blur-sm transition-all duration-300" />
      
      {/* Card content */}
      <div className="relative p-6 bg-dark-900/90 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-primary-500/20 group-hover:border-primary-500/50">
        <div className={`w-12 h-12 ${iconBgColor} rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-100">{title}</h3>
        <p className="text-dark-300">{description}</p>
      </div>
    </div>
  );
}