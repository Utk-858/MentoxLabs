'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    {
      label: 'Home',  path: '/'
    },
    { label: 'About Us', path: '/about' },
    { label: 'Bootcamps', path: '/bootcamps' },
    { label: 'Developer Section', path: '/developers' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Careers', path: '/careers' },
    { label: 'Our Team', path: '/team' },
  ]

  const handleNavClick = (path: string) => {
    router.push(path)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <img src="/assets/logo/MentoxLabs.png" alt="Lexora Logo" className="h-12 w-auto" />

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.path)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  pathname === item.path
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <button className="px-6 py-2 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-all">
              Sign Up
            </button>
            <button className="px-6 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors">
              Log In
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header