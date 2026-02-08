'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const RenovationPage = () => {
  const projects = [
    {
      id: 1,
      title: 'モダンリビング改装',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      description: '既存の空間を活かしながら、現代的な要素を取り入れたリノベーション',
      area: '120㎡',
      location: '東京都'
    },
    {
      id: 2,
      title: 'オフィススペース改装',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop',
      description: '働きやすさと創造性を重視したワークスペースのリノベーション',
      area: '200㎡',
      location: '神奈川県'
    },
    {
      id: 3,
      title: 'カフェ併設住居',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
      description: '1階にカフェ、2階に住居を配置した複合型リノベーション',
      area: '180㎡',
      location: '千葉県'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <div className="pt-32 pb-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light tracking-wider mb-6">RENOVATION</h1>
            <p className="text-gray-600 leading-relaxed">
              既存の建物の魅力を最大限に活かしながら、<br />
              現代のライフスタイルに合わせた空間へと生まれ変わらせます。
            </p>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-light tracking-wider mb-8">サービス内容</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-medium mb-4">住宅リノベーション</h3>
                <p className="text-gray-600 leading-relaxed">
                  マンション、戸建て住宅のフルリノベーションから部分改装まで、
                  お客様のライフスタイルに合わせた快適な住空間を実現します。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">商業施設リノベーション</h3>
                <p className="text-gray-600 leading-relaxed">
                  店舗、オフィス、宿泊施設など、事業の特性を理解し、
                  ブランディングと機能性を両立させた空間づくりを行います。
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-lg font-medium mb-4">リノベーションの流れ</h3>
              <ol className="space-y-4">
                <li className="flex">
                  <span className="text-gray-400 mr-4">01</span>
                  <div>
                    <strong className="block mb-1">現地調査・ヒアリング</strong>
                    <span className="text-gray-600 text-sm">建物の状況確認とお客様のご要望をお伺いします</span>
                  </div>
                </li>
                <li className="flex">
                  <span className="text-gray-400 mr-4">02</span>
                  <div>
                    <strong className="block mb-1">プランニング・設計</strong>
                    <span className="text-gray-600 text-sm">ご要望を形にする設計プランをご提案します</span>
                  </div>
                </li>
                <li className="flex">
                  <span className="text-gray-400 mr-4">03</span>
                  <div>
                    <strong className="block mb-1">お見積り・ご契約</strong>
                    <span className="text-gray-600 text-sm">詳細なお見積りをご提示し、ご契約を締結します</span>
                  </div>
                </li>
                <li className="flex">
                  <span className="text-gray-400 mr-4">04</span>
                  <div>
                    <strong className="block mb-1">施工</strong>
                    <span className="text-gray-600 text-sm">経験豊富な職人による丁寧な施工を行います</span>
                  </div>
                </li>
                <li className="flex">
                  <span className="text-gray-400 mr-4">05</span>
                  <div>
                    <strong className="block mb-1">お引き渡し・アフターフォロー</strong>
                    <span className="text-gray-600 text-sm">完成後も安心してお使いいただけるようサポートします</span>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-light tracking-wider mb-12 text-center">施工事例</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white overflow-hidden">
                <div className="aspect-[4/3] relative bg-gray-200">
                  {/* Image placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <span>Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>面積: {project.area}</span>
                    <span>場所: {project.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-light tracking-wider mb-6">リノベーションのご相談</h2>
          <p className="text-gray-600 mb-8">
            まずはお気軽にご相談ください。<br />
            お客様のご要望に合わせて最適なプランをご提案いたします。
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-gray-900 text-white px-8 py-4 hover:bg-gray-800 transition-colors"
          >
            お問い合わせはこちら
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default RenovationPage