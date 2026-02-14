'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const IndustryProblemsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const problems = [
    {
      title: 'The Experience Gap',
      content: '"You\'ve Mastered Complex Systems. Yet Your Expertise Never Compounds. Each Implementation Starts From Scratch Because Logic Is Trapped In Vendor-Specific Tools. It Can\'t Be Reused Or Carried Forward"',
    },
    {
      title: 'The Reconstruction Cycle',
      content: 'Migrations Move Data And Interfaces, But Your Reasoning Is Left Behind. When Platforms Change, Nothing Carries Forward, Forcing You To Rebuild The Brain Of Your Business Just To Swap Its Technical Limbs.',
    },
    {
      title: 'The Scalability Wall',
      content: 'Most Automations Are Wired To Specific Data Shapes And Screen Structures, Not Business Intent. They Assume The World Stays Stable. But When An ERP Evolves—Your Automation Collapses Because It Has No Reasoning Layer To Adapt To The Change',
    },
    {
      title: 'The Agentic Barrier',
      content: 'Core Enterprise Systems Are Environments Of Constraint; AI Agents Are Designed For Autonomy. Without A Semantic Layer, An Agent Doesn\'t Know What Is A Legal Boundary, What Is An Audit-Trail Risk, Or What Action Is Irreversible.',
    },
  ]

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-6xl font-bold mb-16"
        >
          INDUSTRY <span className="text-primary">PROBLEMS</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-3xl p-8 shadow-xl border-l-4 border-primary"
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                {problem.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {problem.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IndustryProblemsSection
