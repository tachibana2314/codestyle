import React from 'react'
import Image from 'next/image'

const works = [
  {
    id: 1,
    category: 'SHOP',
    title: 'Cultiva糸島醸造所',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    category: 'HOUSE RENOVATION',
    title: '由布高原に佇む、大人のためのリゾートハウス',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    category: 'HOUSE RENOVATION',
    title: '海を望む、素材にこだわる高感度リノベーション',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    category: 'HAIR SALON',
    title: "Men's Only Salon SHIFT 糸島店",
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop',
  },
  {
    id: 5,
    category: 'SHOP',
    title: 'BELGRAVIA&SONS（BARBER）',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&h=600&fit=crop',
  },
  {
    id: 6,
    category: 'MANSION RENOVATION',
    title: '区切らない間取りを楽しむ、ホテルライクな住まい',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
  },
]

const WorksSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-sm md:text-base tracking-widest text-gray-600 mb-4">
            WORKS
          </h2>
          <p className="text-3xl md:text-4xl font-light">施工事例</p>
          <p className="text-gray-600 mt-4">
            tsumugiteで手掛けさせていただいた最新の施工事例を紹介します。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <div key={work.id} className="group cursor-pointer">
              <div className="relative w-full h-64 bg-gray-200 mb-4 overflow-hidden">
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-xs tracking-wider text-gray-500 mb-2">
                {work.category}
              </p>
              <h3 className="text-base font-medium group-hover:text-gray-600 transition-colors">
                {work.title}
              </h3>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-gray-900 text-sm tracking-wider hover:bg-gray-900 hover:text-white transition-colors">
            WORKS
          </button>
        </div>
      </div>
    </section>
  )
}

export default WorksSection