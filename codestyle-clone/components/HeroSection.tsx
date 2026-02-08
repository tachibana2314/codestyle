import React from 'react'

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-6">
          <span className="block">TRADITIONAL</span>
          <span className="block mt-2">DESIGN WORKS</span>
        </h1>
        <p className="text-sm md:text-base tracking-widest text-gray-600 uppercase">
          RENOVATION, SHOP DESIGN, NEWBUILD HOUSE, FURNITURE.
        </p>
      </div>
    </section>
  )
}

export default HeroSection