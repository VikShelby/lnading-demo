'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { ReactNode, useState } from 'react';
import Image from 'next/image';
import ImageModal from './ImageModal';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductSectionProps {
  icon?: LucideIcon;
  image?: string;
  images?: string[];
  title: string;
  description: string;
  features: string[];
  reverse?: boolean;
  gradient: string;
}

export default function ProductSection({
  icon: Icon,
  image,
  images,
  title,
  description,
  features,
  reverse = false,
  gradient,
}: ProductSectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const imageArray = images || (image ? [image] : []);
  const hasMultipleImages = imageArray.length > 1;
  const currentImage = imageArray[currentImageIndex];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imageArray.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + imageArray.length) % imageArray.length);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`flex flex-col ${
        reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } items-center gap-8 lg:gap-12`}
    >
      {/* Icon/Visual Side */}
      <div className="flex-1 w-full">
        {hasMultipleImages ? (
          <div className="flex items-center justify-center gap-6 h-auto rounded-3xl bg-black p-8 relative">
            {imageArray.map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative h-auto w-auto rounded-2xl overflow-hidden cursor-pointer shadow-2xl z-10"
                onClick={() => {
                  setCurrentImageIndex(index);
                  setIsModalOpen(true);
                }}
              >
                <Image src={img} alt={`${title} ${index + 1}`} width={400} height={800} className="object-contain h-[500px] w-auto" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/40">
                  <span className="text-white text-sm font-semibold">Click to enlarge</span>
                </div>
              </motion.div>
            ))}
            {/* White Arrow Between Images */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <ChevronRight className="w-12 h-12 text-white drop-shadow-lg" strokeWidth={3} />
            </div>
          </div>
        ) : (
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className={`w-full h-80 rounded-3xl bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden ${currentImage ? 'cursor-pointer' : ''}`}
            onClick={() => currentImage && setIsModalOpen(true)}
          >
            <div className="absolute inset-0 bg-black/20" />
            {currentImage ? (
              <Image src={currentImage} alt={title} width={400} height={320} className="w-full h-full object-cover relative z-10" />
            ) : Icon ? (
              <Icon className="w-32 h-32 text-white relative z-10" strokeWidth={1.5} />
            ) : null}
            {currentImage && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/40 z-20">
                <span className="text-white text-lg font-semibold">Click to enlarge</span>
              </div>
            )}
          </motion.div>
        )}
      </div>

      {currentImage && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          imageSrc={currentImage}
          title={title}
        />
      )}

      {/* Content Side */}
      <div className="flex-1 w-full">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            {Icon && (
              <div className={`p-3 rounded-2xl bg-gradient-to-br ${gradient}`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
            )}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              {title}
            </h3>
          </div>

          <p className="text-lg text-gray-400 leading-relaxed">{description}</p>

          <ul className="space-y-3">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="mt-1 w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-300 leading-relaxed">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
