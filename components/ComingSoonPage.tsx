'use client'

import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Clock, Sparkles, Rocket } from 'lucide-react'

interface ComingSoonPageProps {
  title?: string
  subtitle?: string
}

const ComingSoonPage = ({ 
  title = "Coming Soon", 
  subtitle = "We're working hard to bring you something amazing!" 
}: ComingSoonPageProps) => {
  const [gridOpacity, setGridOpacity] = useState(0.35)

  useEffect(() => {
    const interval = setInterval(() => {
      setGridOpacity(prev => prev === 0.35 ? 0.45 : 0.35)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen relative flex flex-col">
      {/* Header */}
      <Header />
      
      {/* Animated Grid Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute w-full h-full bg-gradient-to-b from-blue-100 via-blue-50 to-white" />
        <div className="absolute w-full h-full" style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}>
          <div 
            className="absolute w-[200%] h-[200%] left-[-50%] top-[-20%] transition-opacity duration-1000"
            style={{
              transform: 'rotateX(60deg) translateZ(-200px)',
              backgroundImage: `linear-gradient(to right, rgba(66, 119, 255, ${gridOpacity}) 1px, transparent 1px), linear-gradient(to bottom, rgba(66, 119, 255, ${gridOpacity}) 1px, transparent 1px)`,
              backgroundSize: '80px 80px',
              animation: 'grid-move 20s linear infinite'
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8"
          >
            <div className="relative inline-block">
              {/* Pulsing circles */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute inset-0 bg-primary/10 rounded-full blur-2xl"
              />
              
              {/* Main icon */}
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="relative bg-white rounded-full p-12 shadow-2xl border-4 border-primary/20"
              >
                <Rocket className="w-24 h-24 text-primary" />
              </motion.div>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-bold text-gray-darker mb-4"
            style={{ fontSize: '45.68px', lineHeight: '100%' }}
          >
            {title}
          </motion.h1>

          {/* Animated dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  duration: 0.8, 
                  repeat: Infinity, 
                  delay: i * 0.2 
                }}
                className="w-2 h-2 bg-primary rounded-full"
              />
            ))}
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12"
          >
            {[
              { icon: Clock, text: "Launching Soon" },
              { icon: Sparkles, text: "Exciting Features" },
              { icon: Rocket, text: "Worth the Wait" }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.15, duration: 0.6 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="font-semibold text-gray-darker">{item.text}</p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.history.back()}
              className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-all shadow-lg"
            >
              Go Back Home
            </motion.button>
          </motion.div>

          {/* Progress indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="mt-16 max-w-md mx-auto"
          >
            <p className="text-sm text-gray-500 mb-3">Development Progress</p>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '60%' }}
                transition={{ delay: 2, duration: 1.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-primary to-blue-400"
              />
            </div>
          </motion.div>
        </div>
        
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default ComingSoonPage