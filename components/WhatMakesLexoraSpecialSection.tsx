'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Package, Brain, RefreshCw } from 'lucide-react'

const WhatMakesLexoraSpecialSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: Package,
      title: 'Canonical Entities',
      subtitle: 'The Facts',
      points: [
        'ERP-Agnostic Data Models That Work Everywhere',
        'Defined Once, Used Across All Systems',
        'Portable & Permanent — Survives Any Migration',
      ],
    },
    {
      icon: Brain,
      title: 'Reasoning Engine',
      subtitle: 'The Workflows',
      points: [
        'Centralized Business Logic In One Place',
        'Written Once, Executed Universally',
        'Developer-Friendly: Python, Node, Or Java',
      ],
    },
    {
      icon: RefreshCw,
      title: 'Adapters',
      subtitle: 'The Mappers',
      points: [
        'ERP-Specific Translation Layers',
        'Swappable During Migrations',
        'Clean Separation From Core Logic',
      ],
    },
  ]

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          What Makes <span className="text-primary">Lexora</span> Special:
        </motion.h2>

        {/* Feature Cards */}
        
        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center max-w-6xl mx-auto"
        >
          <p className="text-2xl md:text-3xl font-bold leading-relaxed">
            "Stop Writing '<span className="text-primary">Junk Logic</span>' To Satisfy Legacy APIs.{' '}
            <span className="text-primary">Lexora</span> Lets You Build On Facts, 
            While We Handle The Adapters. It's Time To{' '}
            <span className="text-primary">Build Assets</span>,{' '}
            <span className="text-primary">Not Billable Hours</span>."
          </p>
        </motion.div>

        {/* Migrate At Warp Speed Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 flex flex-col md:flex-row gap-6 items-stretch"
        >
          {/* Left side - 3 vertical pills */}
          <div className="flex gap-4 md:gap-6">
            {['100% Logic Portability', 'The Agentic Reasoning', 'Migrate At Warp Speed'].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 + i * 0.1 }}
                className="bg-gray-900 text-white rounded-3xl flex items-center justify-center px-4 py-8 md:px-6 md:py-12 flex-1 min-h-[200px] md:min-h-[280px]"
              >
                <p className="transform -rotate-90 text-xs sm:text-sm md:text-base font-bold whitespace-nowrap">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right side - Blue Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="bg-gradient-to-br from-primary to-blue-600 rounded-3xl p-8 md:p-12 shadow-2xl flex-1 flex flex-col justify-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
              Migrate At Warp Speed
            </h3>
            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              Why Rebuild The Brain Just To Change The Limbs? Swap ERP Adapters In Weeks, Not Years
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatMakesLexoraSpecialSection