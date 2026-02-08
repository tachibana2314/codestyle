'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const ShopDesignPage = () => {
  const projects = [
    {
      id: 1,
      title: 'ファッションブティック',
      image: '/images/shop-1.jpg',
      description: 'ミニマルで洗練された空間で商品の魅力を最大限に引き出す店舗デザイン',
      area: '80㎡',
      location: '渋谷区'
    },
    {
      id: 2,
      title: 'カフェ・レストラン',
      image: '/images/shop-2.jpg',
      description: '暖かみのある空間でゆったりとした時間を過ごせるカフェデザイン',
      area: '150㎡',
      location: '世田谷区'
    },
    {
      id: 3,
      title: 'ヘアサロン',
      image: '/images/shop-3.jpg',
      description: 'スタイリッシュでモダンなヘアサロンの内装デザイン',
      area: '120㎡',
      location: '港区'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Navbar />
      <div className="pt-32 pb-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light tracking-wider mb-6">SHOP DESIGN</h1>
            <p className="text-gray-600 leading-relaxed">
              ブランドの世界観を空間に落とし込み、<br />
              お客様に特別な体験を提供する店舗デザインを創造します。
            </p>
            <Footer />
    </div>
          <Footer />
    </div>
        <Footer />
    </div>

      {/* Service Details */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-light tracking-wider mb-8">サービス内容</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-medium mb-4">コンセプトメイキング</h3>
                <p className="text-gray-600 leading-relaxed">
                  ブランドの価値やターゲット層を分析し、
                  最適な店舗コンセプトを策定します。
                </p>
                <Footer />
    </div>
              <div>
                <h3 className="text-lg font-medium mb-4">空間デザイン</h3>
                <p className="text-gray-600 leading-relaxed">
                  動線計画、照明計画、マテリアル選定など、
                  細部までこだわった空間デザインを行います。
                </p>
                <Footer />
    </div>
              <div>
                <h3 className="text-lg font-medium mb-4">什器・サイン計画</h3>
                <p className="text-gray-600 leading-relaxed">
                  商品の魅力を最大限に引き出す什器デザインや
                  効果的なサイン計画をご提案します。
                </p>
                <Footer />
    </div>
              <div>
                <h3 className="text-lg font-medium mb-4">施工管理</h3>
                <p className="text-gray-600 leading-relaxed">
                  設計から施工まで一貫してサポートし、
                  高品質な店舗空間を完成させます。
                </p>
                <Footer />
    </div>
              <Footer />
    </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-lg font-medium mb-4">店舗デザインの特徴</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-4">●</span>
                  <div>
                    <strong className="block mb-1">ブランド価値の向上</strong>
                    <span className="text-gray-600 text-sm">空間を通じてブランドの世界観を体現し、価値を高めます</span>
                    <Footer />
    </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-4">●</span>
                  <div>
                    <strong className="block mb-1">顧客体験の最適化</strong>
                    <span className="text-gray-600 text-sm">快適なショッピング体験を提供する動線設計</span>
                    <Footer />
    </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-4">●</span>
                  <div>
                    <strong className="block mb-1">売上向上への貢献</strong>
                    <span className="text-gray-600 text-sm">効果的な商品ディスプレイと購買意欲を刺激する空間設計</span>
                    <Footer />
    </div>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-4">●</span>
                  <div>
                    <strong className="block mb-1">持続可能なデザイン</strong>
                    <span className="text-gray-600 text-sm">環境に配慮した素材選びと長期的な使用を考慮した設計</span>
                    <Footer />
    </div>
                </li>
              </ul>
              <Footer />
    </div>
            <Footer />
    </div>
          <Footer />
    </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-light tracking-wider mb-12 text-center">店舗デザイン事例</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white overflow-hidden">
                <div className="aspect-[4/3] relative bg-gray-200">
                  {/* Image placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <span>Image</span>
                    <Footer />
    </div>
                  <Footer />
    </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>面積: {project.area}</span>
                    <span>場所: {project.location}</span>
                    <Footer />
    </div>
                  <Footer />
    </div>
                <Footer />
    </div>
            ))}
            <Footer />
    </div>
          <Footer />
    </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-light tracking-wider mb-6">店舗デザインのご相談</h2>
          <p className="text-gray-600 mb-8">
            新規出店、改装など、店舗デザインに関する<br />
            ご相談はお気軽にお問い合わせください。
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-gray-900 text-white px-8 py-4 hover:bg-gray-800 transition-colors"
          >
            お問い合わせはこちら
          </Link>
          <Footer />
    </div>
      </section>
      <Footer />
    </div>
  )
}

export default ShopDesignPage