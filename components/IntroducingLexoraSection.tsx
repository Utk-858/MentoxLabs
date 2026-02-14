'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Layers, Scale, Shield } from 'lucide-react'

const IntroducingLexoraSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: Layers,
      title: 'The Semantic Buffer',
      description: 'Abstracts Complexity By Translating Business Intent Into Technical Execution. One Interface, Infinite Backends.',
    },
    {
      icon: Scale,
      title: 'Neutrality As Feature',
      description: 'Vendor-Agnostic By Design. Your Business Logic Belongs To You—Never Locked Into A Single Platform.',
    },
    {
      icon: Shield,
      title: 'The Adaptive Shield',
      description: 'Protects Against Semantic Chaos By Maintaining Consistent Reasoning Across Changing Infrastructure.',
    },
  ]

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-darker mb-4">
            Introducing <span className="text-primary">Lexora:</span> The Missing Variable
          </h2>
          <p className="text-xl text-gray-dark max-w-4xl mx-auto">
            A Canonical, First-Class Reasoning Layer That Transforms How Enterprises Connect Business Logic To Execution.
          </p>
        </motion.div>

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
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-darker">{feature.title}</h3>
                <p className="text-gray-dark leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center max-w-5xl mx-auto mb-12"
        >
          <p className="text-2xl md:text-4xl font-bold text-gray-darker leading-relaxed">
            "<span className="text-primary">Lexora</span> Turns Your ERP Into A Dumb Utility—And Your Business 
            Logic Into A <span className="text-primary">Portable Asset</span>."
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <button className="px-10 py-4 rounded-full bg-primary text-white text-lg font-semibold hover:bg-primary-dark transition-all shadow-lg inline-flex items-center gap-2">
            Learn More
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default IntroducingLexoraSection
