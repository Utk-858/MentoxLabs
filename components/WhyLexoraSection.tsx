'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const WhyLexoraSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  // Simplified keyboard layout
  const topRow = ['esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F9', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', '⏻']
  const numberRow = ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '⌫']
  const qwertyRow = ['⇥', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\']
  const asdfRow = ['⇪', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', '↵']
  const zxcvRow = ['⇧', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '⇧']
  const bottomRow = ['fn', 'ctrl', 'opt', '⌘', 'SPACE', '⌘', 'opt', '◄', '▼', '►']

  const renderKey = (key: string, index: number, rowIndex: number) => {
    const isWide = key === 'SPACE'
    
    return (
      <motion.div
        key={`${rowIndex}-${index}`}
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: (rowIndex * 0.03) + (index * 0.01), duration: 0.2 }}
        className={`${
          isWide ? 'flex-grow' : 'w-12 md:w-14'
        } h-12 md:h-14 bg-white rounded-lg border-2 border-blue-200 flex items-center justify-center text-xs md:text-sm font-medium hover:shadow-md transition-shadow`}
      >
        {key}
      </motion.div>
    )
  }

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-b from-blue-100 to-blue-200">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-gray-800 mb-16"
        >
          Why Lexora?
        </motion.h2>

        {/* Keyboard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-3xl p-6 md:p-8 shadow-2xl"
        >
          <div className="space-y-2">
            <div className="flex gap-2">{topRow.map((key, i) => renderKey(key, i, 0))}</div>
            <div className="flex gap-2">{numberRow.map((key, i) => renderKey(key, i, 1))}</div>
            <div className="flex gap-2">{qwertyRow.map((key, i) => renderKey(key, i, 2))}</div>
            <div className="flex gap-2">{asdfRow.map((key, i) => renderKey(key, i, 3))}</div>
            <div className="flex gap-2">{zxcvRow.map((key, i) => renderKey(key, i, 4))}</div>
            <div className="flex gap-2">{bottomRow.map((key, i) => renderKey(key, i, 5))}</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyLexoraSection
