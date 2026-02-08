'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const FurniturePage = () => {
  const categories = [
    { name: 'テーブル', count: 24 },
    { name: 'チェア', count: 36 },
    { name: 'ソファ', count: 18 },
    { name: '収納', count: 42 },
    { name: '照明', count: 28 },
    { name: 'アクセサリー', count: 56 }
  ]

  const products = [
    {
      id: 1,
      name: 'MINIMAL DESK',
      category: 'テーブル',
      price: '¥128,000',
      image: '/images/furniture-1.jpg',
      description: 'シンプルで機能的なワークデスク'
    },
    {
      id: 2,
      name: 'COMFORT CHAIR',
      category: 'チェア',
      price: '¥68,000',
      image: '/images/furniture-2.jpg',
      description: '長時間の作業も快適なエルゴノミクスチェア'
    },
    {
      id: 3,
      name: 'RELAX SOFA',
      category: 'ソファ',
      price: '¥248,000',
      image: '/images/furniture-3.jpg',
      description: '上質なリラックスタイムを提供する3人掛けソファ'
    },
    {
      id: 4,
      name: 'STORAGE UNIT',
      category: '収納',
      price: '¥158,000',
      image: '/images/furniture-4.jpg',
      description: '美しさと機能性を兼ね備えた収納ユニット'
    },
    {
      id: 5,
      name: 'PENDANT LIGHT',
      category: '照明',
      price: '¥48,000',
      image: '/images/furniture-5.jpg',
      description: '空間を演出するミニマルなペンダントライト'
    },
    {
      id: 6,
      name: 'WALL ART',
      category: 'アクセサリー',
      price: '¥28,000',
      image: '/images/furniture-6.jpg',
      description: '空間にアクセントを加えるアートピース'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="pt-20 pb-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light tracking-wider mb-6">FURNITURE</h1>
            <p className="text-gray-600 leading-relaxed">
              暇らしに彩りを添える、<br />
              洗練されたデザイン家具をお届けします。
            </p>
          </div>
        </div>
      </div>

      {/* About */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-light tracking-wider mb-8 text-center">tsumugite FURNITURE</h2>
            <p className="text-gray-600 leading-relaxed text-center mb-12">
              tsumugite FURNITUREは、シンプルで時代を超えたデザインを追求します。<br />
              国内外の優れたデザイナーや職人と協力し、<br />
              高品質で機能的な家具を製作・セレクトしています。
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-lg font-medium mb-2">デザイン</h3>
                <p className="text-gray-600 text-sm">
                  ミニマルで洗練された
                  時代を超えたデザイン
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">品質</h3>
                <p className="text-gray-600 text-sm">
                  選び抜かれた素材と
                  熟練の技術による製作
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">機能性</h3>
                <p className="text-gray-600 text-sm">
                  美しさと使いやすさを
                  両立させた設計
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-light tracking-wider mb-12 text-center">カテゴリー</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link 
                key={category.name}
                href="#" 
                className="bg-white p-8 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-light tracking-wider mb-2">{category.name}</h3>
                <p className="text-gray-500 text-sm">{category.count} items</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-2xl font-light tracking-wider mb-12 text-center">人気商品</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="aspect-square relative bg-gray-200 overflow-hidden mb-4">
                  {/* Image placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <span>Product Image</span>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity"></div>
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-light">{product.name}</h3>
                      <p className="text-gray-500 text-sm">{product.category}</p>
                    </div>
                    <p className="text-lg font-light">{product.price}</p>
                  </div>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-light tracking-wider mb-12 text-center">サービス</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8">
                <h3 className="text-lg font-medium mb-4">オーダーメイド</h3>
                <p className="text-gray-600 text-sm mb-4">
                  お客様の空間に合わせた
                  カスタム家具の製作を承っています
                </p>
                <Link href="/contact" className="text-sm underline">詳しく見る →</Link>
              </div>
              <div className="bg-white p-8">
                <h3 className="text-lg font-medium mb-4">コーディネート</h3>
                <p className="text-gray-600 text-sm mb-4">
                  プロのコーディネーターが
                  空間全体の家具選びをサポート
                </p>
                <Link href="/contact" className="text-sm underline">詳しく見る →</Link>
              </div>
              <div className="bg-white p-8">
                <h3 className="text-lg font-medium mb-4">レンタル</h3>
                <p className="text-gray-600 text-sm mb-4">
                  イベントや短期利用向けの
                  家具レンタルサービス
                </p>
                <Link href="/contact" className="text-sm underline">詳しく見る →</Link>
              </div>
              <div className="bg-white p-8">
                <h3 className="text-lg font-medium mb-4">メンテナンス</h3>
                <p className="text-gray-600 text-sm mb-4">
                  大切な家具を長く使うための
                  メンテナンスサービス
                </p>
                <Link href="/contact" className="text-sm underline">詳しく見る →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-light tracking-wider mb-6">家具に関するご相談</h2>
          <p className="text-gray-600 mb-8">
            オーダーメイド家具、コーディネートなど、<br />
            家具に関するご相談はお気軽にお問い合わせください。
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
              カタログ請求
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FurniturePage