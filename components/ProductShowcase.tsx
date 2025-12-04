'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Brain, Users, TrendingUp } from 'lucide-react';

export default function ProductShowcase() {
  const [activeImage, setActiveImage] = useState(0);

  const screenshots = [
    {
      title: 'Scenario Simulation Engine',
      description: 'AI-powered environment simulation predicting stress levels, meltdown probability, and reactions',
    },
    {
      title: 'Real-Time Guidance Dashboard',
      description: 'Step-by-step recommendations and personalized lessons based on predicted scenarios',
    },
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden" id="behavior-simulation">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-sm text-green-400 mb-4">
            <Brain className="w-4 h-4" />
            Behavior Simulation for Parents
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Prepare for Any <span className="text-gradient">Situation</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Simulate challenging environments and predict your child's reactions before they happen
          </p>
        </motion.div>

        {/* Main Laptop Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Laptop Frame */}
          <div className="relative">
            {/* Screen */}
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-t-3xl p-4 border-4 border-gray-800">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-black rounded-b-2xl z-10" />
              
              {/* Screenshot Container */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
                <motion.img
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  src={activeImage === 0 ? '/screenshot1.png' : '/screenshot2.png'}
                  alt={screenshots[activeImage].title}
                  className="w-full h-auto"
                  onError={(e) => {
                    // Fallback gradient if images don't load
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                      parent.style.minHeight = '500px';
                      parent.style.display = 'flex';
                      parent.style.alignItems = 'center';
                      parent.style.justifyContent = 'center';
                    }
                  }}
                />
                {/* Placeholder with gradient if image doesn't exist */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 -z-10" />
              </div>
            </div>

            {/* Laptop Base */}
            <div className="relative h-8 bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-3xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-1 bg-gray-700 rounded-full" />
              </div>
            </div>

            {/* Shadow */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-black/40 blur-2xl rounded-full" />
          </div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              {screenshots[activeImage].title}
            </h3>
            <p className="text-gray-400">
              {screenshots[activeImage].description}
            </p>
          </motion.div>

          {/* Toggle Buttons */}
          <div className="flex justify-center gap-3 mt-8">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeImage === index
                    ? 'bg-white w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`View screenshot ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl border border-green-500/20 backdrop-blur-sm"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-white mb-2">Predictive AI</div>
            <div className="text-gray-400">Forecast stress, meltdowns, and communication difficulties</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl border border-green-500/20 backdrop-blur-sm"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-white mb-2">Parent Guidance</div>
            <div className="text-gray-400">Step-by-step strategies for handling situations</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl border border-green-500/20 backdrop-blur-sm"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-white mb-2">Adaptive Learning</div>
            <div className="text-gray-400">Improves predictions based on real outcomes</div>
          </motion.div>
        </div>

        {/* Simulation Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-3">Simulate Environments</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Crowded spaces (malls, schools, events)</li>
              <li>• High noise levels and sensory overload</li>
              <li>• Stressful transitions and changes</li>
              <li>• Social interactions and group settings</li>
            </ul>
          </div>
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-3">Predict Reactions</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Stress level indicators (low to high)</li>
              <li>• Meltdown probability percentage</li>
              <li>• Communication difficulty assessment</li>
              <li>• Trigger identification and warnings</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
