import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const worksData = [
  {
    id: 'cultiva-itoshima',
    category: 'SHOP',
    title: 'Cultiva糸島醸造所',
    image: '/images/work1.jpg',
    year: '2024',
  },
  {
    id: 'yufuin-resort-house',
    category: 'HOUSE RENOVATION',
    title: '由布高原に佇む、大人のためのリゾートハウス',
    image: '/images/work2.jpg',
    year: '2024',
  },
  {
    id: 'seaside-renovation',
    category: 'HOUSE RENOVATION',
    title: '海を望む、素材にこだわる高感度リノベーション',
    image: '/images/work3.jpg',
    year: '2024',
  },
  {
    id: 'shift-itoshima',
    category: 'HAIR SALON',
    title: "Men's Only Salon SHIFT 糸島店",
    image: '/images/work4.jpg',
    year: '2023',
  },
  {
    id: 'belgravia-barber',
    category: 'SHOP',
    title: 'BELGRAVIA&SONS（BARBER）',
    image: '/images/work5.jpg',
    year: '2023',
  },
  {
    id: 'hotel-like-mansion',
    category: 'MANSION RENOVATION',
    title: '区切らない間取りを楽しむ、ホテルライクな住まい',
    image: '/images/work6.jpg',
    year: '2023',
  },
  {
    id: 'modern-office',
    category: 'OFFICE DESIGN',
    title: 'クリエイティブオフィスデザイン',
    image: '/images/work7.jpg',
    year: '2023',
  },
  {
    id: 'vintage-cafe',
    category: 'CAFE',
    title: 'ヴィンテージカフェリノベーション',
    image: '/images/work8.jpg',
    year: '2023',
  },
  {
    id: 'minimal-house',
    category: 'NEW BUILD',
    title: 'ミニマルモダンハウス',
    image: '/images/work9.jpg',
    year: '2022',
  },
]

const categories = ['ALL', 'HOUSE RENOVATION', 'SHOP', 'OFFICE DESIGN', 'NEW BUILD', 'CAFE', 'HAIR SALON', 'MANSION RENOVATION']

export default function WorksPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('ALL')
  
  const filteredWorks = selectedCategory === 'ALL' 
    ? worksData 
    : worksData.filter(work => work.category === selectedCategory)

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container-custom">
          <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-6">WORKS</h1>
          <p className="text-lg text-gray-600">施工事例</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-sm tracking-wider transition-colors ${
                  selectedCategory === category
                    ? 'text-gray-900 border-b-2 border-gray-900'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Works Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorks.map((work) => (
              <Link 
                href={`/works/${work.id}`} 
                key={work.id}
                className="group cursor-pointer"
              >
                <div className="aspect-w-16 aspect-h-12 bg-gray-200 mb-4 overflow-hidden">
                  <div className="w-full h-64 bg-gray-300 group-hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center justify-center h-full text-gray-500">
                      Image
                    </div>
                  </div>
                </div>
                <p className="text-xs tracking-wider text-gray-500 mb-2">
                  {work.category} / {work.year}
                </p>
                <h3 className="text-base font-medium group-hover:text-gray-600 transition-colors">
                  {work.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}