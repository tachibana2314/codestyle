'use client'

import React, { useState, useEffect } from 'react'

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
          <a href="#" className="text-xl font-light tracking-wider">
            CODE STYLE
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#works" className="text-sm tracking-wider hover:text-gray-600 transition-colors">WORKS</a>
            <a href="#service" className="text-sm tracking-wider hover:text-gray-600 transition-colors">SERVICE</a>
            <a href="#concept" className="text-sm tracking-wider hover:text-gray-600 transition-colors">CONCEPT</a>
            <a href="#blog" className="text-sm tracking-wider hover:text-gray-600 transition-colors">BLOG</a>
            <a href="#contact" className="text-sm tracking-wider hover:text-gray-600 transition-colors">CONTACT</a>
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
              <a href="#works" className="block text-sm tracking-wider hover:text-gray-600 transition-colors">WORKS</a>
              <a href="#service" className="block text-sm tracking-wider hover:text-gray-600 transition-colors">SERVICE</a>
              <a href="#concept" className="block text-sm tracking-wider hover:text-gray-600 transition-colors">CONCEPT</a>
              <a href="#blog" className="block text-sm tracking-wider hover:text-gray-600 transition-colors">BLOG</a>
              <a href="#contact" className="block text-sm tracking-wider hover:text-gray-600 transition-colors">CONTACT</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar