'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const BuildingDesignPage = () => {
  const projects = [
    {
      id: 1,
      title: '商業複合施設',
      category: 'COMMERCIAL',
      image: '/images/building-1.jpg',
      description: '商業とオフィスが融合した複合施設の設計',
      scale: '地上12階、地下2階',
      area: '15,000㎡',
      location: '東京都港区'
    },
    {
      id: 2,
      title: '集合住宅',
      category: 'RESIDENTIAL',
      image: '/images/building-2.jpg',
      description: '都市型高級マンションの設計・施工',
      scale: '地上20階',
      area: '8,500㎡',
      location: '神奈川県横浜市'
    },
    {
      id: 3,
      title: '教育施設',
      category: 'EDUCATIONAL',
      image: '/images/building-3.jpg',
      description: '最新の教育環境を提供する大学校舎の設計',
      scale: '地上8階',
      area: '12,000㎡',
      location: '埼玉県'
    }
  ]

  const services = [
    {
      title: '企画・設計',
      description: '土地活用から建築設計までトータルサポート',
      icon: '01'
    },
    {
      title: 'プロジェクト管理',
      description: '大規模プロジェクトのスケジュール・コスト管理',
      icon: '02'
    },
    {
      title: '施工監理',
      description: '品質・安全・工程管理を徹底した施工',
      icon: '03'
    },
    {
      title: 'アフターサービス',
      description: '竣工後のメンテナンス・改修サポート',
      icon: '04'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="pt-20 pb-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light tracking-wider mb-6">BUILDING DESIGN</h1>
            <p className="text-gray-600 leading-relaxed">
              都市の未来を創造する、<br />
              革新的な建築デザインを提供します。
            </p>
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-light tracking-wider mb-8 text-center">建築フィロソフィー</h2>
            <p className="text-gray-600 leading-relaxed text-center mb-12">
              私たちは、建築を通じて社会に価値を提供します。<br />
              環境との調和、利用者の快適性、経済性を追求し、<br />
              持続可能な社会の実現に貢献します。
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-light mb-4">環境</div>
                <p className="text-gray-600 text-sm">
                  自然と共生する
                  サステナブルな建築
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light mb-4">機能</div>
                <p className="text-gray-600 text-sm">
                  使う人を中心に考えた
                  最適な空間設計
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light mb-4">美</div>
                <p className="text-gray-600 text-sm">
                  時代を超えて愛される
                  普遍的なデザイン
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-light tracking-wider mb-12 text-center">サービス内容</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service) => (
              <div key={service.title} className="bg-white p-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-2xl font-light tracking-wider mb-12 text-center">プロジェクト</h2>
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div key={project.id} className="grid md:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="aspect-[16/10] relative bg-gray-200">
                    {/* Image placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <span>Project Image</span>
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="text-sm text-gray-500 mb-2">{project.category}</div>
                  <h3 className="text-2xl font-light tracking-wider mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <dl className="space-y-2">
                    <div className="flex">
                      <dt className="text-gray-500 w-20">規模:</dt>
                      <dd className="text-gray-700">{project.scale}</dd>
                    </div>
                    <div className="flex">
                      <dt className="text-gray-500 w-20">面積:</dt>
                      <dd className="text-gray-700">{project.area}</dd>
                    </div>
                    <div className="flex">
                      <dt className="text-gray-500 w-20">所在地:</dt>
                      <dd className="text-gray-700">{project.location}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-light tracking-wider mb-12 text-center">専門分野</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium mb-4">建築タイプ</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    商業施設（ショッピングモール、ホテル）
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    オフィスビル
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    集合住宅（マンション）
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    教育・文化施設
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    医療・福祉施設
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">特殊技術</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    免震・制震設計
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    省エネルギー設計
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    BIMを活用した設計
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    ユニバーサルデザイン
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-3"></span>
                    スマートビルディング
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-light tracking-wider mb-6">建築設計のご相談</h2>
          <p className="text-gray-600 mb-8">
            大規模プロジェクトから中小規模建築まで、<br />
            あらゆる建築プロジェクトに対応いたします。
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-gray-900 text-white px-8 py-4 hover:bg-gray-800 transition-colors"
          >
            お問い合わせはこちら
          </Link>
        </div>
      </section>
    </div>
  )
}

export default BuildingDesignPage