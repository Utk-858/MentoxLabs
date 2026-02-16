'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Code, Cog, Lightbulb, Palette, Linkedin, Twitter, Mail } from 'lucide-react'
import Image from 'next/image'

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
      image: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1771236877/himanshu_qourki.png',
    },
    {
      name: 'Utkarsh Bansal',
      role: 'Founding Engineer',
      category: 'Technical Core',
      description: 'Focuses on core systems engineering and framework development. Brings strong applied AI and backend expertise to the reasoning layer architecture.',
      icon: Code,
      image: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1771236877/utkarsh_cu5qjp.png',
    },
    {
      name: 'Hemish Jain',
      role: 'COO',
      category: 'Operations & Systems',
      description: 'Oversees operations, partnerships, and strategic execution. Ensures alignment between technical progress and enterprise readiness.',
      icon: Cog,
      image: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1771236877/hemish_ahtcpl.png',
    },
    {
      name: 'Navya Jain',
      role: 'Creative Lead',
      category: 'Design & Identity',
      description: 'Shapes the visual and conceptual identity of Mentox Labs. Ensures clarity, cohesion, and discipline in how the framework is represented.',
      icon: Palette,
      image: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1771236877/navya_rx9mvm.png',
    },
  ]

  return (
    <div className="min-h-screen relative bg-white">
      {/* Header */}
      <Header />
      
      {/* Grid Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute w-full h-full bg-gradient-to-b from-blue-50 via-white to-white" />
        <div className="absolute w-full h-full" style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}>
          <div 
            className="absolute w-[200%] h-[200%] left-[-50%] top-[-20%]"
            style={{
              transform: 'rotateX(60deg) translateZ(-200px)',
              backgroundImage: 'linear-gradient(to right, rgba(66, 119, 255, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(66, 119, 255, 0.08) 1px, transparent 1px)',
              backgroundSize: '80px 80px',
              animation: 'grid-move 20s linear infinite'
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section ref={heroRef} className="relative pt-32 pb-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="inline-block mb-6"
              >
                <div className="px-5 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <p className="text-primary font-semibold text-sm">Meet the Team</p>
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="font-bold text-gray-darker mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                style={{ lineHeight: '110%' }}
              >
                The Team Behind <br/><span className="text-primary">Mentox Labs</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed px-4"
              >
                A tightly aligned founding team combining deep technical execution, operational discipline, and product thinking.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="inline-block px-4"
              >
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl px-6 sm:px-8 py-4 sm:py-6 max-w-2xl">
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 font-medium mb-2">
                    We are not a collection of freelancers.
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
                    We are a deliberately structured unit.
                  </p>
                </div>
              </motion.div>
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
    <section ref={ref} className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          {members.map((member, index) => {
            const Icon = member.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.7, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  {/* Primary blue top bar */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-primary" />
                  
                  <div className="p-8">
                    {/* Top Section: Image + Info */}
                    <div className="flex items-start gap-6 mb-6">
                      {/* Profile Image with blue glow */}
                      <motion.div
                        initial={{ scale: 0, rotate: -10 }}
                        animate={isInView ? { scale: 1, rotate: 0 } : {}}
                        transition={{ delay: index * 0.1 + 0.2, duration: 0.6, type: "spring" }}
                        className="relative flex-shrink-0"
                      >
                        <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-md group-hover:bg-primary/30 transition-all" />
                        <div className="relative w-28 h-28 rounded-2xl overflow-hidden border-4 border-white shadow-xl ring-2 ring-primary/20">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            onError={(e) => {
                              const target = e.currentTarget as HTMLImageElement
                              target.style.display = 'none'
                              const fallback = target.nextElementSibling as HTMLElement
                              if (fallback) fallback.classList.remove('hidden')
                            }}
                          />
                          {/* Fallback */}
                          <div className="hidden w-full h-full flex items-center justify-center bg-primary">
                            <Icon className="w-14 h-14 text-white" />
                          </div>
                        </div>
                        
                        {/* Role Icon Badge */}
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={isInView ? { scale: 1, rotate: 0 } : {}}
                          transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
                          className="absolute -bottom-3 -right-3 w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg"
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                      </motion.div>

                      {/* Name & Role */}
                      <div className="flex-1 pt-2">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                          className="mb-3"
                        >
                          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-2">
                            <p className="text-xs font-bold text-primary">
                              {member.category}
                            </p>
                          </div>
                        </motion.div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-lg font-semibold text-primary">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-base">
                      {member.description}
                    </p>

                    {/* Optional: Social Links (commented out - uncomment and add links if needed) */}
                    {/* <div className="flex gap-3 mt-6 pt-6 border-t border-gray-100">
                      <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white flex items-center justify-center transition-all">
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white flex items-center justify-center transition-all">
                        <Twitter className="w-4 h-4" />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white flex items-center justify-center transition-all">
                        <Mail className="w-4 h-4" />
                      </a>
                    </div> */}
                  </div>
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
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          
          <div className="relative p-12 md:p-16">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
              className="inline-block mb-8"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8"
            >
              <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
                To create the missing reasoning layer required for enterprise AI to scale safely and structurally.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="border-t border-white/10 pt-8"
            >
              <p className="text-gray-400 text-lg mb-3">This is not an experiment.</p>
              <p className="text-3xl font-bold bg-gradient-to-r from-primary via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                It is a long-term architectural commitment.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}