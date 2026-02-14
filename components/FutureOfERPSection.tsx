'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Brain, Shield } from 'lucide-react'

const FutureOfERPSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const benefits = [
    {
      icon: Zap,
      title: 'Velocity At\nWarp Speed',
      description: 'Decades Of Integration Work Reduced To Weeks Of Configuration.',
    },
    {
      icon: Brain,
      title: 'True Agentic\nIntelligence',
      description: 'AI Agents Making Real Decisions, Not Just Fetching Data.',
    },
    {
      icon: Shield,
      title: 'Exceptional\nControl & Resilience',
      description: 'Lexora Makes Your Enterprise ERP-Agnostic And Future-Proof.',
    },
  ]

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Overlapping circles with city image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            The <span className="text-primary">Future Of ERP</span> Industry
          </h2>
          
          {/* Overlapping circles design */}
          <div className="flex justify-center mb-12">
            <div className="flex -space-x-12">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-700 to-blue-900 opacity-70"
                  style={{ zIndex: 5 - i }}
                />
              ))}
            </div>
          </div>

          <p className="text-xl font-semibold mb-2">
            The <span className="text-primary">Lexora Advantage</span> :
          </p>
          <p className="text-xl text-gray-700 mb-8">
            Built For <span className="text-primary">Autonomy</span>, Not For Lock In
          </p>
          
          <div className="border-t-4 border-b-4 border-primary py-4 max-w-4xl mx-auto">
            <p className="text-sm md:text-base font-bold tracking-wider">
              THIS IS NOT AN OPTION . IT IS THE NEXT LAYER OF STACK
            </p>
          </div>
        </motion.div>

        {/* Benefit Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
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
                <h3 className="text-2xl font-bold mb-4 whitespace-pre-line text-primary">
                  {benefit.title}
                </h3>
                <div className="border-l-4 border-primary pl-4">
                  <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Curved bottom transition */}
      <div className="mt-20">
        <svg
          className="w-full"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0C0 0 360 120 720 120C1080 120 1440 0 1440 0V120H0V0Z"
            fill="#000000"
          />
        </svg>
      </div>
    </section>
  )
}

export default FutureOfERPSection
