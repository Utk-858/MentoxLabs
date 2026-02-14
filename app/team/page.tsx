'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Code, Cog, Lightbulb, Palette } from 'lucide-react'

export default function TeamPage() {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })

  const teamMembers = [
    {
      name: 'Himanshu Sharma',
      role: 'CEO & CTO',
      category: 'Technical Core',
      description: 'Leads architecture and technical direction. A two-time international hackathon winner in Agentic AI systems, he drives execution with speed and precision.',
      icon: Code,
    },
    {
      name: 'Utkarsh Bansal',
      role: 'Founding Engineer',
      category: 'Technical Core',
      description: 'Focuses on core systems engineering and framework development. Brings strong applied AI and backend expertise to the reasoning layer architecture.',
      icon: Code,
    },
    {
      name: 'Hemish Jain',
      role: 'COO',
      category: 'Operations & Systems',
      description: 'Oversees operations, partnerships, and strategic execution. Ensures alignment between technical progress and enterprise readiness.',
      icon: Cog,
    },
    {
      name: 'Navya Jain',
      role: 'Creative Lead',
      category: 'Design & Identity',
      description: 'Shapes the visual and conceptual identity of Mentox Labs. Ensures clarity, cohesion, and discipline in how the framework is represented.',
      icon: Palette,
    },
  ]

  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <Header />
      
      {/* Grid Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute w-full h-full bg-gradient-to-b from-blue-100 via-blue-50 to-white" />
        <div className="absolute w-full h-full" style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}>
          <div 
            className="absolute w-[200%] h-[200%] left-[-50%] top-[-20%]"
            style={{
              transform: 'rotateX(60deg) translateZ(-200px)',
              backgroundImage: 'linear-gradient(to right, rgba(66, 119, 255, 0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(66, 119, 255, 0.35) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
              animation: 'grid-move 20s linear infinite'
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="font-bold text-gray-darker mb-6"
                style={{ fontSize: '45.68px', lineHeight: '110%' }}
              >
                The Team Behind <span className="text-primary">Mentox Labs</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl text-gray-700 max-w-4xl mx-auto mb-8"
              >
                Mentox Labs is built by a tightly aligned founding team combining deep technical execution, operational discipline, and product thinking.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-2xl font-bold text-gray-darker"
              >
                We are not a collection of freelancers.<br />
                <span className="text-primary">We are a deliberately structured unit.</span>
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Team Members Section */}
        <TeamMembersSection members={teamMembers} />

        {/* Our Direction Section */}
        <OurDirectionSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

// Team Members Section Component
const TeamMembersSection = ({ members }: { members: any[] }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {members.map((member, index) => {
            const Icon = member.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-3xl p-8 shadow-xl border-l-4 border-primary relative overflow-hidden group"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative">
                  {/* Category Badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.15 + 0.2, duration: 0.6 }}
                    className="inline-block mb-4"
                  >
                    <div className="px-4 py-1 rounded-full bg-primary/10 border border-primary/20">
                      <p className="text-primary text-sm font-semibold">{member.category}</p>
                    </div>
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
                    className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6"
                  >
                    <Icon className="w-7 h-7 text-primary" />
                  </motion.div>

                  {/* Name & Role */}
                  <h3 className="text-3xl font-bold text-gray-darker mb-2">{member.name}</h3>
                  <p className="text-xl text-primary font-semibold mb-4">{member.role}</p>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Our Direction Section Component
const OurDirectionSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="relative">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6"
            >
              <Lightbulb className="w-8 h-8 text-primary" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl font-bold text-white mb-6"
            >
              Our Direction
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-gray-300 mb-6 leading-relaxed"
            >
              We are building Lexora with a singular focus:
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-2xl font-bold text-white mb-8 leading-relaxed"
            >
              To create the missing reasoning layer required for enterprise AI to scale safely and structurally.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="border-t-2 border-primary/30 pt-6"
            >
              <p className="text-lg text-gray-400 mb-2">This is not an experiment.</p>
              <p className="text-2xl font-bold text-primary">It is a long-term architectural commitment.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}