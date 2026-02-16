'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Smartphone, Users, Heart, Award } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const BootcampsPage = () => {
  const heroRef = useRef(null)
  const isHeroInView = useInView(heroRef, { once: true })

  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <Header />
      
      {/* Grid Background - MORE VISIBLE like hero section */}
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
        {/* Lighter overlay for more grid visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section - EXACT match to main hero */}
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20 pb-10">
          
          <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Badge - matching hero style */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-block mb-8"
            >
              <div className="px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
                <p className="text-primary font-semibold">A Non-Profit Initiative by Mentox</p>
              </div>
            </motion.div>

            {/* Main Heading - EXACT hero font (Hanken Grotesk 45.68px) */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-bold text-gray-darker mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
              style={{ lineHeight: '110%' }}
            >
              Empowering the Next<br />
              Generation of <span className="text-primary">AI Innovators</span>
            </motion.h1>

            {/* Subtitle - matching Montserrat 26.55px from hero */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isHeroInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-bold text-gray-darker max-w-4xl mx-auto mb-10 text-base sm:text-lg md:text-xl lg:text-2xl px-4"
              style={{ fontFamily: 'Montserrat, sans-serif', lineHeight: '120%' }}
            >
              A non-profit initiative by Mentox to train students in real-world AI and ML skills
            </motion.p>

            {/* CTA Buttons - matching hero buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-all shadow-lg"
              >
                Join the Initiative
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full border-2 border-gray-300 text-gray-darker font-medium hover:border-primary hover:text-primary transition-all"
              >
                Explore Bootcamps
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What is the Initiative Section */}
      <WhatIsSection />

      {/* What We Did Section - NEW */}
      <WhatWeDidSection />

      {/* Bootcamp Highlights Section - NEW */}
      <BootcampHighlightsSection />

      {/* Bootcamp 2.0 Section */}
      <Bootcamp20Section />

      {/* Bootcamp 1.0 Section */}
      <Bootcamp10Section />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Be Part of Revolution Section */}
      <BePartSection />
      
      {/* Footer */}
      <Footer />
      </div>
    </div>
  )
}

// What is the Mentox AI Bootcamp Initiative Section
const WhatIsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      title: 'Non-Profit Learning Program',
      description: 'The Mentox AI Bootcamp is aimed at bridging the gap between students and the AI industry through hands-on training, mentorship, and project-based learning.',
    },
    {
      title: 'Completely Free of Cost',
      description: 'Each edition provides workshops, speaker sessions, and mentorship — completely free of cost, fostering accessible AI education for all students.',
    },
  ]

  const highlights = [
    { icon: Smartphone, title: 'Hands-On Training', subtitle: 'Real-world projects' },
    { icon: Users, title: 'Expert Mentorship', subtitle: 'Industry professionals' },
    { icon: Heart, title: 'Free Access', subtitle: 'No cost barrier' },
    { icon: Award, title: 'Industry Skills', subtitle: 'Job-ready expertise' },
  ]

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          What is the Mentox AI Bootcamp Initiative?
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-20 h-1 bg-primary mx-auto mb-12"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl text-gray-600 text-center max-w-4xl mx-auto mb-16"
        >
          A comprehensive program designed to bridge the gap between academic learning and industry requirements
        </motion.p>

        {/* Top 2 Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-gray-900 rounded-3xl p-8 relative overflow-hidden"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                className="absolute top-6 left-6 w-8 h-8 bg-primary rounded-full" 
              />
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom 4 Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-gray-900 rounded-2xl p-6"
              >
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                  className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4"
                >
                  <Icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.subtitle}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Bootcamp 2.0 Section
const Bootcamp20Section = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { number: '500+', label: 'Registrations' },
    { number: '4+', label: 'Workshops' },
    { number: '20+', label: 'Mentors & Volunteers' },
    { number: '5+', label: 'Google Developer Expert Till Now' },
  ]

  return (
    <section ref={ref} className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="flex justify-center mb-8"
        >
          <div className="px-6 py-2 rounded-full bg-primary text-white font-medium flex items-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full" />
            Currently Ongoing
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-6"
        >
          Bootcamp 2.0 — Building the Future with AI
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 text-center max-w-5xl mx-auto mb-16"
        >
          Over <span className="text-primary font-bold">337 Students</span> have registered for this edition Bootcamp, featuring 4 hands-on workshops
          in collaboration with Google for Developers and TensorFlow User Group Jaipur, focused on building practical AI expertise.
        </motion.p>

        {/* Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 shadow-2xl"
        >
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Bootcamp 1.0 Section
const Bootcamp10Section = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Bootcamp 1.0 — Where It All Began
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="w-20 h-1 bg-primary mx-auto mb-12"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-600 text-center max-w-5xl mx-auto mb-8 space-y-4"
        >
          <p>
            The first edition of the Mentox AI Bootcamp, organized in collaboration with Google Developer Groups LNMIIT, brought together over 250 students from LNMIIT and beyond. It served as the starting point of our mission to make AI and Machine Learning accessible to aspiring innovators.
          </p>
          <p>
            Through three expert-led sessions, participants gained hands-on experience in core AI, ML, and Data Science concepts — laying a strong foundation for real-world innovation, research-driven learning, and collaborative growth in the AI ecosystem.
          </p>
        </motion.div>

        {/* Session Images */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { title: 'Orientation Session', image: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1771237401/Copy_of_20251116-DSC00853_1_1_njsdhc.jpg' },
            { title: 'AI Fundamentals Workshop', image: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1771238164/_MG_6990_wkhv9c.jpg' },
            { title: 'Session 2 By Google Developer Expert', image: 'https://res.cloudinary.com/dqskebjcf/image/upload/v1771237057/bootcamp_06_m4u7wu.jpg' }
          ].map((session, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="relative rounded-2xl overflow-hidden bg-gray-800 h-64 group cursor-pointer"
            >
              {/* Background Image */}
              <img 
                src={session.image}
                alt={session.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement
                  target.style.display = 'none'
                }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 transition-all duration-300" />
              
              {/* Title */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {session.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonial Section
const TestimonialSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="bg-gray-900 rounded-3xl p-12"
        >
          <p className="text-xl text-gray-300 italic mb-8">
            "The Mentox AI Bootcamp helped me understand how AI is applied in real-world industry projects. The mentors were incredibly supportive!"
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
              S
            </div>
            <div>
              <p className="text-white font-semibold">Student Participant</p>
              <p className="text-gray-400 text-sm">Bootcamp 1.0</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Be Part of Revolution Section
const BePartSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const options = [
    {
      icon: '🎯',
      title: 'Join as Participant',
      description: 'Learn cutting-edge AI skills with hands-on training',
      buttonText: 'Register Now',
      buttonStyle: 'bg-gray-600 hover:bg-gray-700',
    },
    {
      icon: '👥',
      title: 'Become a Mentor',
      description: 'Share your expertise and guide aspiring AI enthusiasts',
      buttonText: 'Apply as Mentor',
      buttonStyle: 'bg-gray-600 hover:bg-gray-700',
    },
    {
      icon: '⚡',
      title: 'Collaborate with Us',
      description: 'Partner with us to make AI education accessible',
      buttonText: 'Get in Touch',
      buttonStyle: 'bg-primary hover:bg-primary-dark',
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-bold text-center mb-6"
        >
          Be Part of the AI Revolution
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16"
        >
          Join us as a learner, mentor, or collaborator who wants to contribute to open AI education and empower the next generation of innovators.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.2 }}
              className="bg-gray-900 rounded-3xl p-8"
            >
              <div className="text-5xl mb-6">{option.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{option.title}</h3>
              <p className="text-gray-400 mb-8">{option.description}</p>
              <button className={`w-full py-3 rounded-full text-white font-semibold ${option.buttonStyle} transition-all`}>
                {option.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// What We Did Section Component
const WhatWeDidSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-darker mb-4">
            Building The Future
          </h2>
          <p className="text-2xl text-primary font-semibold">
            Mentox AI Bootcamp Initiative
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: What We Did */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-darker mb-6">What We Did?</h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-gray-700 leading-relaxed">
                  • Organized A Non-Profit <span className="text-primary font-semibold">AI Bootcamp In Collaboration With Google</span> For Developers, GDG Cloud Jaipur, TensorFlow User Group Jaipur, And GDG Jaipur
                </p>
              </div>
              
              <div>
                <p className="text-gray-700 leading-relaxed">
                  • Delivered <span className="text-primary font-semibold">Industry-Grade AI Training</span> Through Structured Workshops And Hands-On Bootcamps
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-full overflow-hidden border-4 border-primary shadow-2xl aspect-square">
              <img 
                src="https://res.cloudinary.com/dqskebjcf/image/upload/v1771237401/bootcamp_01_uvnlid.png" 
                alt="Bootcamp classroom with students"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement
                  target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%234277FF" width="400" height="400"/%3E%3Ctext fill="%23fff" font-size="20" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EBootcamp Image%3C/text%3E%3C/svg%3E'
                }}
              />
            </div>
            {/* Decorative blur */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Bootcamp Highlights Section Component
const BootcampHighlightsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const highlights = [
    {
      stat: '400+ Students',
      description: 'Trained Across Two Editions',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      stat: 'Real Production Constraints',
      description: 'Curriculum Designed Around Real Production Constraints, Not Academic Demos',
      color: 'from-purple-500 to-pink-600',
    },
    {
      stat: 'Focus Areas',
      items: ['Machine Learning', 'Data Science', 'Generative AI'],
      color: 'from-emerald-500 to-teal-600',
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Group Photo */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://res.cloudinary.com/dqskebjcf/image/upload/v1771237055/bootcamp_05_jp05as.jpg" 
              alt="Bootcamp group photo"
              className="w-full h-auto"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement
                target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1200" height="400"%3E%3Crect fill="%234277FF" width="1200" height="400"/%3E%3Ctext fill="%23fff" font-size="24" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EBootcamp Group Photo%3C/text%3E%3C/svg%3E'
              }}
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Bootcamp <span className="text-primary">Highlights</span>
        </motion.h2>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.15, duration: 0.8 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
            >
              {/* Gradient top bar */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${highlight.color} rounded-t-3xl`} />
              
              <div className="pt-4">
                {highlight.stat && (
                  <h3 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${highlight.color} bg-clip-text text-transparent mb-3`}>
                    {highlight.stat}
                  </h3>
                )}
                
                {highlight.description && (
                  <p className="text-gray-700 leading-relaxed">
                    {highlight.description}
                  </p>
                )}
                
                {highlight.items && (
                  <ul className="space-y-3 mt-4">
                    {highlight.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-gray-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BootcampsPage