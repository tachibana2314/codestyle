'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const worksData = [
  {
    id: '1',
    category: 'SHOP',
    title: '青山フラッグシップストア',
    image: '/images/work1.jpg',
    year: '2023',
    client: '株式会社ABC',
    location: '東京都港区青山',
  },
  {
    id: '2',
    category: 'RESTAURANT',
    title: '代官山レストラン',
    image: '/images/work2.jpg',
    year: '2023',
    client: 'レストラングループXYZ',
    location: '東京都渋谷区代官山',
  },
  {
    id: '3',
    category: 'OFFICE',
    title: 'IT企業オフィス',
    image: '/images/work3.jpg',
    year: '2023',
    client: 'テクノロジー株式会社',
    location: '東京都港区六本木',
  },
  {
    id: '4',
    category: 'RESIDENCE',
    title: '目黒区個人邸',
    image: '/images/work4.jpg',
    year: '2023',
    client: '個人',
    location: '東京都目黒区',
  },
  {
    id: '5',
    category: 'SALON',
    title: '表参道ヘアサロン',
    image: '/images/work5.jpg',
    year: '2023',
    client: 'ビューティーサロングループ',
    location: '東京都渋谷区表参道',
  },
  {
    id: '6',
    category: 'CAFE',
    title: '吉祥寺カフェ',
    image: '/images/work6.jpg',
    year: '2023',
    client: 'カフェチェーン',
    location: '東京都武蔵野市吉祥寺',
  },
  {
    id: '7',
    category: 'OFFICE',
    title: '渋谷クリエイティブオフィス',
    image: '/images/work7.jpg',
    year: '2023',
    client: 'クリエイティブエージェンシー',
    location: '東京都渋谷区',
  },
  {
    id: '8',
    category: 'SHOP',
    title: '銀座ブティック',
    image: '/images/work8.jpg',
    year: '2023',
    client: 'ファッションブランド',
    location: '東京都中央区銀座',
  },
  {
    id: '9',
    category: 'BAR',
    title: '恵比寿バー',
    image: '/images/work9.jpg',
    year: '2023',
    client: 'バーオーナー',
    location: '東京都渋谷区恵比寿',
  },
  {
    id: '10',
    category: 'OFFICE',
    title: '品川コワーキングスペース',
    image: '/images/work10.jpg',
    year: '2022',
    client: 'コワーキング運営会社',
    location: '東京都港区品川',
  },
  {
    id: '11',
    category: 'RESIDENCE',
    title: '世田谷区マンションリノベーション',
    image: '/images/work11.jpg',
    year: '2022',
    client: '個人',
    location: '東京都世田谷区',
  },
  {
    id: '12',
    category: 'RESIDENCE',
    title: '横浜戸建てリノベーション',
    image: '/images/work12.jpg',
    year: '2022',
    client: '個人',
    location: '神奈川県横浜市',
  },
]

const categories = ['ALL', 'SHOP', 'RESTAURANT', 'OFFICE', 'RESIDENCE', 'SALON', 'CAFE', 'BAR']

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
                <h3 className="text-base font-medium group-hover:text-gray-600 transition-colors mb-2">
                  {work.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {work.location}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}