'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import Image from 'next/image';

interface FeatureCardProps {
  icon?: LucideIcon;
  image?: string;
  title: string;
  description: string;
  gradient: string;
  delay?: number;
}

export default function FeatureCard({
  icon: Icon,
  image,
  title,
  description,
  gradient,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
      className="bg-white/5 rounded-3xl border border-white/10 hover:border-white/20 transition-all p-8 backdrop-blur-sm"
    >
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 overflow-hidden`}>
        {image ? (
          <Image src={image} alt={title} width={64} height={64} className="w-full h-full object-cover" />
        ) : Icon ? (
          <Icon className="w-8 h-8 text-white" strokeWidth={2} />
        ) : null}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}
