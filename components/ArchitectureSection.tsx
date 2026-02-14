'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Monitor, Bot, Globe, Smartphone } from 'lucide-react'

const ArchitectureSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const consumerApps = [
    { icon: Monitor, label: 'Fiora UI' },
    { icon: Bot, label: 'AI Agents' },
    { icon: Globe, label: 'Web Apps' },
    { icon: Smartphone, label: 'Mobile' },
  ]

  const systemsOfRecord = [
    { label: 'SAP S/4', logo: 'SAP' },
    { label: 'Oracle', logo: 'O' },
    { label: 'Workday', logo: 'W' },
    { label: 'Salesforce', logo: 'sf' },
    { label: 'Solutions', logo: 'odoo' },
  ]

  return (
    // Updated background to match the light blue/white aesthetic
    <section ref={ref} className="relative py-20 bg-[#f0f7ff] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm tracking-widest text-gray-500 font-semibold mb-4 uppercase">Architecture</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">
            What Actually Is <span className="text-blue-500">Lexora</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            The Semantic Layer That Transforms ERP Chaos Into Unified,{' '}
            <span className="text-blue-600 font-semibold">Intelligent Architecture</span>
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <p className="text-center text-gray-500 font-medium mb-8">Consumer Applications</p>

          {/* Consumer Apps Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 relative z-10">
            {consumerApps.map((app, index) => {
              const Icon = app.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col items-center border border-white/50"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 border border-gray-100">
                    <Icon className="w-6 h-6 text-blue-500" />
                  </div>
                  <p className="text-sm font-bold text-slate-800">{app.label}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Central Connector SVG */}
          <div className="absolute top-[160px] left-0 w-full h-[120px] pointer-events-none hidden md:block">
            <svg className="w-full h-full" viewBox="0 0 800 120" fill="none">
               <motion.path 
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.5 }}
                d="M100 0C100 60 400 60 400 120 M300 0C300 60 400 60 400 120 M500 0C500 60 400 60 400 120 M700 0C700 60 400 60 400 120" 
                stroke="url(#gradient1)" strokeWidth="4" strokeLinecap="round" 
               />
               <defs>
                 <linearGradient id="gradient1" x1="400" y1="0" x2="400" y2="120" gradientUnits="userSpaceOnUse">
                   <stop stopColor="#60a5fa" />
                   <stop offset="1" stopColor="#1d4ed8" />
                 </linearGradient>
               </defs>
            </svg>
          </div>

          {/* LEXORA Central Node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-br from-[#2a308b] to-[#1a1f61] rounded-3xl py-10 px-8 mx-auto max-w-lg mb-16 shadow-2xl relative z-20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <h3 className="text-5xl font-bold text-white text-center tracking-[0.2em] mb-2 relative z-10">
              LEXORA
            </h3>
            <p className="text-blue-200/80 text-center text-sm font-medium tracking-wide relative z-10">
              Canonical Control Plane
            </p>
          </motion.div>

          {/* Bottom Connector */}
          <div className="flex flex-col items-center mb-12">
            <motion.div 
              initial={{ height: 0 }}
              animate={isInView ? { height: 60 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
              className="w-1 bg-gradient-to-b from-blue-600 to-blue-400 relative"
            >
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 border-b-4 border-r-4 border-blue-400 rotate-45"></div>
            </motion.div>
            
            <motion.div 
               initial={{ opacity: 0, scaleX: 0 }}
               animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
               transition={{ delay: 1.2, duration: 0.8 }}
               className="w-48 h-8 border-b-[6px] border-blue-500/50 rounded-[100%]"
            />
          </div>

          {/* Systems of Record */}
          <div className="flex justify-center gap-3 md:gap-6 flex-wrap relative z-10">
            {systemsOfRecord.map((system, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.4 + index * 0.1 }}
                className="bg-white rounded-2xl p-5 shadow-lg w-28 md:w-32 text-center border border-gray-100"
              >
                <div className="h-8 flex items-center justify-center mb-2">
                    {/* Placeholder for logos */}
                    <span className="text-xs font-black text-blue-900/20 uppercase">{system.label.split(' ')[0]}</span>
                </div>
                <p className="text-xs font-bold text-slate-700">{system.label}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-gray-500 font-medium mt-10">Systems Of Record</p>
        </div>
      </div>
    </section>
  )
}

export default ArchitectureSection