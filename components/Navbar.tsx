'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="text-xl font-light tracking-wider">
            tsumugite
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-sm tracking-wider hover:text-gray-600 transition-colors">ABOUT</Link>
            <Link href="/works" className="text-sm tracking-wider hover:text-gray-600 transition-colors">WORKS</Link>
            <Link href="/#service" className="text-sm tracking-wider hover:text-gray-600 transition-colors">SERVICE</Link>
            <Link href="/#blog" className="text-sm tracking-wider hover:text-gray-600 transition-colors">BLOG</Link>
            <Link href="/contact" className="text-sm tracking-wider hover:text-gray-600 transition-colors">CONTACT</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            <div className="space-y-1">
              <span className={`block w-6 h-0.5 bg-gray-900 transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-900 transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-900 transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="py-4 space-y-4">
              <Link href="/about" className="block text-sm tracking-wider hover:text-gray-600 transition-colors">ABOUT</Link>
              <Link href="/works" className="block text-sm tracking-wider hover:text-gray-600 transition-colors">WORKS</Link>
              <Link href="/#service" className="block text-sm tracking-wider hover:text-gray-600 transition-colors">SERVICE</Link>
              <Link href="/#blog" className="block text-sm tracking-wider hover:text-gray-600 transition-colors">BLOG</Link>
              <Link href="/contact" className="block text-sm tracking-wider hover:text-gray-600 transition-colors">CONTACT</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar