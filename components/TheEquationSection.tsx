'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { X, Bot, Brain, Workflow, Play } from 'lucide-react'

const TheEquationSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stages = [
    { icon: Bot, title: 'Agentic AI\nin Enterprise', status: null },
    { icon: Brain, title: 'Business\nReasoning', status: 'TO BE SOLVED', color: 'red' },
    { icon: Workflow, title: 'Workflow\nOrchestration', status: 'PARTIALLY SOLVED', color: 'yellow' },
    { icon: Play, title: 'Execution', status: 'SOLVED', color: 'green' },
  ]

  const problems = [
    {
      title: 'Semantic Chaos',
      description: 'Unstructured data and intent are lost in translation between disparate tools',
    },
    {
      title: 'Vendor Lock-in',
      description: 'Logic is buried in workflow builders, making it impossible to scale',
    },
  ]

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl md:text-5xl font-bold mb-4"
        >
          <span className="text-primary">The Equation</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-2xl md:text-3xl font-bold text-gray-darker mb-16"
        >
          Enterprise Stack Ignores
        </motion.p>

        {/* Agentic AI Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-3xl shadow-2xl p-8 mb-16"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {stages.map((stage, index) => {
              const Icon = stage.icon
              return (
                <div key={index} className="flex items-center gap-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.15 }}
                    className="flex-1"
                  >
                    <div className={`rounded-2xl p-6 text-center ${
                      index === 0 
                        ? 'bg-blue-50 border-2 border-blue-200' 
                        : 'bg-blue-50 border-2 border-blue-200'
                    }`}>
                      <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold mb-3 whitespace-pre-line">
                        {stage.title}
                      </h3>
                      {stage.status && (
                        <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${
                          stage.color === 'red' 
                            ? 'bg-red-100 text-red-700 border-2 border-red-300'
                            : stage.color === 'yellow'
                            ? 'bg-yellow-100 text-yellow-700 border-2 border-yellow-300'
                            : 'bg-green-100 text-green-700 border-2 border-green-300'
                        }`}>
                          {stage.status}
                        </div>
                      )}
                    </div>
                  </motion.div>
                  
                  {index < stages.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.15 }}
                      className="text-4xl font-bold text-gray-400 hidden md:block"
                    >
                      {index === 0 ? '=' : '+'}
                    </motion.div>
                  )}
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Problems + Arrow + Solution */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Problem Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6"
          >
            {problems.map((problem, index) => (
              <div key={index} className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <X className="w-5 h-5 text-red-700" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{problem.title}</h4>
                    <p className="text-gray-700">{problem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Arrow + Click to Solve */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              {/* Blue diamond connector */}
              <div className="absolute -left-32 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-primary rotate-45" />
              <div className="bg-white border-4 border-gray-900 rounded-3xl px-12 py-8 shadow-xl text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl">🔌</span>
                </div>
                <span className="text-2xl font-bold">Click to Solve</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TheEquationSection
