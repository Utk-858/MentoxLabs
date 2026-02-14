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
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-xl"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-primary font-semibold mb-6">{feature.subtitle}</p>
                <ul className="space-y-3">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-1">◉</span>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

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
          className="mt-20 grid md:grid-cols-2 gap-8 items-center"
        >
          {/* Left side - 3 pillars */}
          <div className="flex gap-6">
            {['100% Logic Portability', 'The Agentic Reasoning', 'Migrate At Warp Speed'].map((text, i) => (
              <div
                key={i}
                className="bg-gray-800 text-white px-6 py-12 rounded-2xl transform -rotate-3 flex items-center justify-center flex-1"
              >
                <p className="transform rotate-90 text-sm font-bold whitespace-nowrap">{text}</p>
              </div>
            ))}
          </div>

          {/* Right side - Card */}
          <div className="bg-gradient-to-br from-blue-300 to-blue-500 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-4xl font-bold mb-6">Migrate At Warp Speed</h3>
            <p className="text-lg leading-relaxed">
              Why Rebuild The Brain Just To Change The Limbs? Swap ERP Adapters In Weeks, Not Years
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhatMakesLexoraSpecialSection
