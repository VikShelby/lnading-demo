'use client';

import { motion } from 'framer-motion';
import { Watch, Smartphone, Globe, Brain, ArrowRight, RefreshCw } from 'lucide-react';

export default function EcosystemDiagram() {
  const products = [
    {
      icon: Watch,
      name: 'Hardware Device',
      color: 'from-red-500 to-orange-500',
      position: 'top-0 left-1/2 -translate-x-1/2',
    },
    {
      icon: Smartphone,
      name: 'Mobile App',
      color: 'from-blue-500 to-cyan-500',
      position: 'top-1/2 left-0 -translate-y-1/2',
    },
    {
      icon: Globe,
      name: 'NeuroCare Web',
      color: 'from-purple-500 to-pink-500',
      position: 'top-1/2 right-0 -translate-y-1/2',
    },
    {
      icon: Brain,
      name: 'Behavior Sim',
      color: 'from-green-500 to-emerald-500',
      position: 'bottom-0 left-1/2 -translate-x-1/2',
    },
  ];

  return (
    <section className="py-20 bg-black" id="ecosystem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Connected <span className="text-gradient">Ecosystem</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            All four products work together seamlessly, sharing data and insights
            to provide comprehensive support.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central Hub */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-2xl flex items-center justify-center">
              <RefreshCw className="w-16 h-16 text-white animate-spin-slow" />
            </div>
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <p className="text-sm font-semibold text-white">Real-time Sync</p>
            </div>
          </motion.div>

          {/* Product Nodes */}
          <div className="relative w-full h-96 md:h-[500px]">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, type: 'spring' }}
                  className={`absolute ${product.position}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-gradient-to-br ${product.color} shadow-xl flex items-center justify-center cursor-pointer`}
                  >
                    <Icon className="w-12 h-12 md:w-16 md:h-16 text-white" />
                  </motion.div>
                  <p className="text-center mt-4 font-semibold text-white text-sm md:text-base whitespace-nowrap">
                    {product.name}
                  </p>
                </motion.div>
              );
            })}

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <motion.line
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
                x1="50%"
                y1="15%"
                x2="50%"
                y2="50%"
                stroke="url(#gradient1)"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              <motion.line
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.6 }}
                x1="15%"
                y1="50%"
                x2="50%"
                y2="50%"
                stroke="url(#gradient2)"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              <motion.line
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.7 }}
                x1="85%"
                y1="50%"
                x2="50%"
                y2="50%"
                stroke="url(#gradient3)"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              <motion.line
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.8 }}
                x1="50%"
                y1="85%"
                x2="50%"
                y2="50%"
                stroke="url(#gradient4)"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              <defs>
                <linearGradient id="gradient1">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
                <linearGradient id="gradient2">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
                <linearGradient id="gradient3">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
                <linearGradient id="gradient4">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="text-center p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
              <p className="font-semibold text-white mb-2">Unified Data</p>
              <p className="text-sm text-gray-400">
                All devices share information for better insights
              </p>
            </div>
            <div className="text-center p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
              <p className="font-semibold text-white mb-2">Seamless Experience</p>
              <p className="text-sm text-gray-400">
                Switch between products without losing context
              </p>
            </div>
            <div className="text-center p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
              <p className="font-semibold text-white mb-2">Continuous Learning</p>
              <p className="text-sm text-gray-400">
                AI improves across all products as you use them
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
