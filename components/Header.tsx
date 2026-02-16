'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Bootcamps', path: '/bootcamps' },
    { label: 'Developer Section', path: '/developers' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Careers', path: '/careers' },
    { label: 'Our Team', path: '/team' },
  ]

  const handleNavClick = (path: string) => {
    router.push(path)
    setMobileMenuOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <img
              src="https://res.cloudinary.com/dqskebjcf/image/upload/v1771236911/MentoxLabs_ayezzd.png"
              alt="Mentox Labs Logo"
              className="h-8 sm:h-10 cursor-pointer"
              onClick={() => router.push('/')}
            />

            {/* Desktop Navigation */}
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

            {/* Desktop CTA Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <button className="px-4 sm:px-6 py-2 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-all">
                Sign Up
              </button>
              <button className="hidden md:block px-6 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                Log In
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 sm:top-20 left-0 right-0 z-40 bg-white border-b border-gray-200 shadow-lg lg:hidden overflow-hidden"
          >
            <nav className="px-4 py-4 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {navItems.map((item, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleNavClick(item.path)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
                    pathname === item.path
                      ? 'bg-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-2 border-t border-gray-200">
                <button className="w-full px-4 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-all">
                  Sign Up
                </button>
                <button className="w-full px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition-all">
                  Log In
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header