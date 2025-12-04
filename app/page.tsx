'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import ProductSection from '@/components/ProductSection';
import FeatureCard from '@/components/FeatureCard';
import EcosystemDiagram from '@/components/EcosystemDiagram';
import ProductShowcase from '@/components/ProductShowcase';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import {
  Watch,
  Smartphone,
  Globe,
  Brain,
  Shield,
  Activity,
  Bell,
  Phone,
  MapPin,
  MessageSquare,
  Mic,
  BookOpen,
  Heart,
  Users,
  Zap,
  Lock,
  Cloud,
  TrendingUp,
} from 'lucide-react';

export default function Home() {
  const products = [
   /* {
      id: 'product-1',
      icon: Watch,
      title: 'Epilepsy & Fall Detection Hardware Device',
      description:
        'A wearable safety device that provides 24/7 protection with real-time fall and seizure detection. Works independently without requiring a smartphone connection.',
      features: [
        'Detects when a user falls to the ground with advanced motion sensors',
        'Detects epileptic seizures and abnormal shaking patterns',
        'Sends instant alerts to parents and caregivers',
        'Uses ElevenLabs AI voice for automatic emergency calls',
        'Works completely offline for uninterrupted protection',
        'Logs all events with timestamps for doctors and medical review',
      ],
      gradient: 'from-red-500 to-orange-500',
      reverse: false,
    },*/ 
    {
      id: 'product-3',
      images: ['/1.png', '/2.png', '/pls-portrait.png', '/4.png'],
      title: 'NeuroCare Communication Web App',
      description:
        'A comprehensive AI-powered platform designed to enhance communication, social skills, and daily routines for autistic individuals.',
      features: [
        'Voice Assistant: Add routines, goals, and lessons with voice commands; detects emotional speech and sends data to n8n; speaks back naturally with advanced TTS',
        'Social Communication Coach: Gemini AI generates up to 20 personalized lessons tailored to individual needs; lessons dynamically added to routines and goals; can be triggered via voice assistant',
        'Speech & Expression Support: Converts unclear or difficult speech into clear, readable text; option to speak the converted text aloud for practice',
        'AAC Board: Communication tiles for common phrases; emotion tiles for expressing feelings; custom sentence builder; text-to-speech output for all selections',
      ],
      gradient: 'from-purple-500 to-pink-500',
      reverse: false,
    },
    {
      id: 'product-2',
      images: ['/screen3.png', '/screen2.png'],
      title: 'Mobile Safety App (Standalone Mode)',
      description:
        'A fully functional mobile application that turns your smartphone into a powerful safety device. No additional hardware required—just download and protect.',
      features: [
        'Detects falls and seizures using phone sensors and accelerometer',
        'Fully functional without hardware—complete standalone solution',
        'AI voice emergency calling with natural language processing',
        'Alerts guardians via SMS, push notifications, and real-time GPS location',
        'Comprehensive event logging for medical review and history',
        'Battery-optimized for all-day protection',
      ],
      gradient: 'from-blue-500 to-cyan-500',
      reverse: true,
    },
   
    {
      id: 'product-4',
      image: '/Screenshot1.png',
      title: 'Behavior Simulation for Parents',
      description:
        'An innovative AI tool that helps parents and caregivers prepare for challenging situations by simulating how their child might react in various environments.',
      features: [
        'Simulates different environments: crowds, noise levels, sensory overload, stressful situations',
        'Predicts child\'s reactions: stress levels, meltdown probability, communication difficulties, and triggers',
        'Provides step-by-step guidance for handling predicted scenarios',
        'Recommends personalized lessons and routines based on simulations',
        'Helps build confidence and preparedness for real-world situations',
        'Learns and adapts based on actual outcomes and feedback',
      ],
      gradient: 'from-green-500 to-emerald-500',
      reverse: true,
    },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Real-Time Protection',
      description:
        'Instant detection and alerts for falls and seizures, ensuring immediate response when it matters most.',
      gradient: 'from-red-500 to-orange-500',
    },
    {
      icon: Activity,
      title: 'Advanced AI Detection',
      description:
        'Machine learning algorithms that accurately distinguish between normal activity and emergency situations.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Bell,
      title: 'Multi-Channel Alerts',
      description:
        'SMS, push notifications, email, and AI voice calls ensure caregivers are always informed.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Phone,
      title: 'AI Voice Calling',
      description:
        'Natural-sounding emergency calls using ElevenLabs AI to contact emergency services automatically.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: MapPin,
      title: 'GPS Location Tracking',
      description:
        'Real-time location sharing with caregivers during emergencies for faster response.',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: MessageSquare,
      title: 'Communication Support',
      description:
        'AAC boards, speech conversion, and personalized lessons to improve daily communication.',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Mic,
      title: 'Voice Assistant',
      description:
        'Hands-free control with emotional detection and natural conversation for routines and goals.',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: BookOpen,
      title: 'Personalized Learning',
      description:
        'AI-generated social lessons tailored to individual needs and learning styles.',
      gradient: 'from-teal-500 to-cyan-500',
    },
    {
      image: '/Screenshot1.png',
      title: 'Behavior Prediction',
      description:
        'Simulate scenarios and predict reactions to help parents prepare for challenging situations.',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: Lock,
      title: 'Privacy & Security',
      description:
        'HIPAA-compliant with end-to-end encryption to protect sensitive medical and personal data.',
      gradient: 'from-gray-700 to-gray-900',
    },
    {
      icon: Cloud,
      title: 'Offline Functionality',
      description:
        'Critical safety features work without internet connection for uninterrupted protection.',
      gradient: 'from-sky-500 to-blue-500',
    },
    {
      icon: TrendingUp,
      title: 'Medical Logging',
      description:
        'Comprehensive event logs with timestamps for doctors, therapists, and medical professionals.',
      gradient: 'from-emerald-500 to-green-500',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Parent of 8-year-old with autism',
      content:
        'NeuroCare has been life-changing for our family. The fall detection gave us peace of mind, and the communication tools helped my son express himself in ways we never thought possible.',
      avatar: 'SJ',
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Pediatric Neurologist',
      content:
        'The event logging feature provides invaluable data for medical assessments. I can see exactly when seizures occur and adjust treatment plans accordingly. This is the future of neurodivergent care.',
      avatar: 'MC',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Special Education Teacher',
      content:
        'The behavior simulation tool helps parents prepare for school events and social situations. It\'s amazing to see how confident they become when they know what to expect.',
      avatar: 'ER',
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />

      {/* Products Section */}
      <section className="py-20 bg-black" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Products"
            subtitle="A complete ecosystem of AI-powered tools designed to protect, communicate, and empower."
          />

          <div className="space-y-32">
            {products.map((product, index) => (
              <div key={product.id} id={product.id}>
                <ProductSection {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Ecosystem Diagram */}

      <Footer />
    </main>
  );
}
