'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CodeHousePage = () => {
  const features = [
    {
      title: 'デザイン性',
      description: '洗練されたミニマルデザインで、永く愛される住まい'
    },
    {
      title: '機能性',
      description: '家族のライフスタイルに合わせた最適な間取り'
    },
    {
      title: '快適性',
      description: '自然素材と最新設備による快適な住環境'
    },
    {
      title: '経済性',
      description: '長期的な視点でコストパフォーマンスを追求'
    }
  ]

  const houseTypes = [
    {
      id: 1,
      title: 'MINIMAL',
      subtitle: 'ミニマル',
      image: '/images/house-1.jpg',
      description: 'シンプルで無駄のないデザイン。必要最小限の要素で構成された、洗練された空間が特徴です。',
      features: ['シンプルな外観', 'オープンプラン', '収納力抜群']
    },
    {
      id: 2,
      title: 'MODERN',
      subtitle: 'モダン',
      image: '/images/house-2.jpg',
      description: '現代的なデザインと最新テクノロジーを融合。スマートホーム機能を充実させた先進的な住まいです。',
      features: ['スマートホーム対応', '大きな窓', 'エネルギー効率重視']
    },
    {
      id: 3,
      title: 'NATURAL',
      subtitle: 'ナチュラル',
      image: '/images/house-3.jpg',
      description: '自然素材をふんだんに使用した温かみのあるデザイン。木の温もりを感じる、心地よい空間が特徴です。',
      features: ['無垢材使用', '自然光を活用', 'ガーデン一体型']
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="pt-20 pb-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light tracking-wider mb-6">CODE HOUSE</h1>
            <p className="text-gray-600 leading-relaxed">
              デザインと機能性を追求した、<br />
              あなただけの特別な住空間を創造します。
            </p>
          </div>
        </div>
      </div>

      {/* Concept */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-light tracking-wider mb-8 text-center">CODE HOUSEのコンセプト</h2>
            <p className="text-gray-600 leading-relaxed text-center mb-12">
              CODE HOUSEは、シンプルで美しいデザインと、暮らしやすさを追求した住宅ブランドです。<br />
              一人ひとりのライフスタイルに寄り添い、長く愛される住まいを提供します。
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-gray-600">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* House Types */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-light tracking-wider mb-12 text-center">CODE HOUSEラインナップ</h2>
          <div className="space-y-16">
            {houseTypes.map((house, index) => (
              <div key={house.id} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="aspect-[4/3] relative bg-gray-200">
                    {/* Image placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <span>House Image</span>
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="max-w-md">
                    <div className="flex items-baseline mb-4">
                      <h3 className="text-2xl font-light tracking-wider mr-3">{house.title}</h3>
                      <span className="text-gray-500 text-sm">{house.subtitle}</span>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {house.description}
                    </p>
                    <ul className="space-y-2">
                      {house.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <span className="w-1 h-1 bg-gray-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-light tracking-wider mb-12 text-center">家づくりの流れ</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  01
                </div>
                <h3 className="text-lg font-medium mb-2">ご相談</h3>
                <p className="text-gray-600 text-sm">
                  お客様の理想の暮らしを
                  お聞かせください
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  02
                </div>
                <h3 className="text-lg font-medium mb-2">プランニング</h3>
                <p className="text-gray-600 text-sm">
                  ライフスタイルに合わせた
                  最適なプランをご提案
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  03
                </div>
                <h3 className="text-lg font-medium mb-2">設計・施工</h3>
                <p className="text-gray-600 text-sm">
                  細部までこだわった
                  丁寧な家づくり
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-light tracking-wider mb-12 text-center">施工事例ギャラリー</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square bg-gray-200">
                {/* Image placeholder */}
                <div className="h-full flex items-center justify-center text-gray-400">
                  <span>Gallery {item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-light tracking-wider mb-6">CODE HOUSEのご相談</h2>
          <p className="text-gray-600 mb-8">
            新築、リフォーム、リノベーションまで、<br />
            住まいに関するあらゆるご相談を承っております。
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block bg-gray-900 text-white px-8 py-4 hover:bg-gray-800 transition-colors"
            >
              お問い合わせ
            </Link>
            <Link 
              href="#" 
              className="inline-block border border-gray-900 text-gray-900 px-8 py-4 hover:bg-gray-100 transition-colors"
            >
              資料請求
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CodeHousePage