'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ERPProblemSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-b from-blue-200 via-blue-100 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8"
        >
          THE <span className="text-primary">$4 TRILLION</span> ERP PROBLEM
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold text-gray-800 max-w-5xl mx-auto mb-16"
        >
          <p className="mb-2">" AI Is Scaling.</p>
          <p className="text-primary">ERP Is Stuck."</p>
        </motion.div>
      </div>
    </section>
  )
}

export default ERPProblemSection
