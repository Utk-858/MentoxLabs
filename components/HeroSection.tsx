'use client'

import { motion } from 'framer-motion'
import GridBackground from './GridBackground'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <GridBackground />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Mentox Labs */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-bold text-gray-darker text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            style={{ lineHeight: '100%' }}
          >
            Mentox Labs
          </motion.h2>
          
          {/* Presents */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-semibold text-gray-dark text-xl sm:text-2xl md:text-3xl"
            style={{ lineHeight: '100%' }}
          >
            Presents
          </motion.p>

          {/* LEXORA Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="py-4 sm:py-6 md:py-8"
          >
            <div 
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-gray-darker"
              style={{ fontFamily: 'Incompleeta, sans-serif' }}
            >
              LEXORA
            </div>
          </motion.div>

          {/* The Agentic Reasoning Framework */}
          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4"
          >
            The Agentic <span className="text-primary">Reasoning Framework</span>
          </motion.h3>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="font-bold text-gray-darker max-w-4xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl"
            style={{ fontSize: 'clamp(16px, 4vw, 26.55px)', lineHeight: '120%' }}
          >
            <span className="text-primary">Lexora</span> Makes Business Logic Survive{' '}
            <span className="text-primary">Systems</span>,{' '}
            <span className="text-primary">Vendors</span> And{' '}
            <span className="text-primary">Time</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-all shadow-lg"
            >
              Watch Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full border-2 border-gray-300 text-gray-darker font-medium hover:border-primary hover:text-primary transition-all"
            >
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection