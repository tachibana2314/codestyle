'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const blogPosts = [
  {
    id: '1',
    title: 'MINI GYM 365 #3',
    date: '2026.01.19',
    category: 'FITNESS',
    excerpt: '最新のフィットネスジムのデザインコンセプトについて、健康的なライフスタイルを促進する空間づくりのポイントをご紹介します。',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=500&fit=crop',
  },
  {
    id: '2',
    title: '引き算で形づくったシンプルでミニマルなモノトーン空間【リノベオーナーインタビュー】',
    date: '2026.01.14',
    category: 'RENOVATION',
    excerpt: 'ミニマリズムを追求したオーナー様のインタビュー。必要最小限のものだけで構成された、洗練された住空間の魅力について語っていただきました。',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=500&fit=crop',
  },
  {
    id: '3',
    title: 'MINI GYM 365 #2',
    date: '2026.01.13',
    category: 'FITNESS',
    excerpt: 'コンパクトなスペースでも充実したトレーニングが可能なジムデザイン。効率的な動線と機能性を重視した設計のポイントとは。',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=500&fit=crop',
  },
  {
    id: '4',
    title: '明るく、たおやかな光と、センスに満ちた空間がもたらす、家族みんなの憂いの風景【リノベオーナーインタビュー】',
    date: '2026.01.07',
    category: 'RENOVATION',
    excerpt: '自然光を最大限に活かした開放的な住まい。家族の成長とともに変化する暮らしに対応できる、フレキシブルな空間設計について。',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop',
  },
  {
    id: '5',
    title: 'MINI GYM 365 #1',
    date: '2026.01.06',
    category: 'FITNESS',
    excerpt: '新シリーズ「MINI GYM 365」がスタート。365日、毎日使いたくなるジムの空間デザインとは何か、その答えを探ります。',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop',
  },
  {
    id: '6',
    title: '眺望が素晴らしい、モスグリーンの家【リノベオーナーインタビュー】',
    date: '2025.12.11',
    category: 'RENOVATION',
    excerpt: '高台に位置する絶景のロケーション。モスグリーンをアクセントカラーに採用した、自然と調和する住まいのデザインストーリー。',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=500&fit=crop',
  },
  {
    id: '7',
    title: 'カフェバー「Cultiva」のインテリアデザイン',
    date: '2025.12.05',
    category: 'SHOP',
    excerpt: '昼はカフェ、夜はバーとして営業する二面性を持つ空間。時間帯によって異なる表情を見せる照明計画と内装デザインの工夫。',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=500&fit=crop',
  },
  {
    id: '8',
    title: 'オフィスリノベーション：クリエイティブな働き方を実現する空間',
    date: '2025.11.28',
    category: 'OFFICE',
    excerpt: 'リモートワークとオフィス勤務のハイブリッドワークに対応した、新しいオフィス空間のあり方を提案します。',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop',
  },
  {
    id: '9',
    title: 'tsumugite FURNITUREの新作発表',
    date: '2025.11.20',
    category: 'FURNITURE',
    excerpt: '福岡県大川市の職人とコラボレーションした新作家具シリーズ。伝統的な技術と現代的なデザインの融合。',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=500&fit=crop',
  },
]

const categories = ['ALL', 'RENOVATION', 'SHOP', 'OFFICE', 'FITNESS', 'FURNITURE']

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('ALL')

  const filteredPosts = selectedCategory === 'ALL'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory)

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container-custom">
          <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-6">BLOG</h1>
          <p className="text-lg text-gray-600">ブログ・最新情報</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 text-sm tracking-wider transition-colors ${
                  selectedCategory === category
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="group">
                <Link href={`/blog/${post.id}`}>
                  <div className="relative w-full h-56 bg-gray-200 mb-4 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white px-3 py-1 text-xs tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">{post.date}</p>
                    <h3 className="text-lg font-medium line-clamp-2 group-hover:text-gray-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 border border-gray-900 text-sm tracking-wider hover:bg-gray-900 hover:text-white transition-colors">
              もっと見る
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}