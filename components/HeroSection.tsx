import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop"
          alt="Modern interior design"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-6">
          <span className="block">TRADITIONAL</span>
          <span className="block mt-2">DESIGN WORKS</span>
        </h1>
        <p className="text-sm md:text-base tracking-widest uppercase">
          RENOVATION, SHOP DESIGN, NEWBUILD HOUSE, FURNITURE.
        </p>
      </div>
    </section>
  )
}

export default HeroSection