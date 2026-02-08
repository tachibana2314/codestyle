'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const EstatePage = () => {
  const properties = [
    {
      id: 1,
      title: '青山レジデンス',
      type: '購入',
      price: '¥98,000,000',
      area: '85㎡',
      layout: '3LDK',
      location: '港区青山',
      image: '/images/estate-1.jpg',
      features: ['南向き', 'ペット可', '駐車場付き']
    },
    {
      id: 2,
      title: '代官山ハウス',
      type: '購入',
      price: '¥250,000,000',
      area: '180㎡',
      layout: '一戸建て',
      location: '渋谷区代官山',
      image: '/images/estate-2.jpg',
      features: ['デザイナーズ', 'ガレージ2台', '庭付き']
    },
    {
      id: 3,
      title: '恵比寿オフィス',
      type: '賃貸',
      price: '¥1,200,000/月',
      area: '200㎡',
      layout: 'オフィス',
      location: '渋谷区恵比寿',
      image: '/images/estate-3.jpg',
      features: ['24時間入室可', '会議室付き', '駅徒5分']
    },
    {
      id: 4,
      title: '白金マンション',
      type: '賃貸',
      price: '¥380,000/月',
      area: '65㎡',
      layout: '2LDK',
      location: '港区白金',
      image: '/images/estate-4.jpg',
      features: ['高層階', 'コンシェルジュ', 'ジム付き']
    }
  ]

  const services = [
    {
      title: '売買仲介',
      description: '不動産の購入・売却をトータルサポート',
      details: ['物件査定・価格設定', '買主探索・交渉', '契約手続きサポート']
    },
    {
      title: '賃貸管理',
      description: '賃貸物件の運営管理を代行',
      details: ['入居者募集・審査', '賃料回収・管理', 'メンテナンス対応']
    },
    {
      title: '投資コンサルティング',
      description: '不動産投資の最適ソリューションを提供',
      details: ['投資物件の選定', '収益シミュレーション', '資産運用アドバイス']
    },
    {
      title: '開発プロジェクト',
      description: '土地活用から開発までトータルプロデュース',
      details: ['土地活用提案', '事業計画策定', 'プロジェクト管理']
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="pt-20 pb-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light tracking-wider mb-6">ESTATE</h1>
            <p className="text-gray-600 leading-relaxed">
              価値ある不動産との出会いを創造し、<br />
              豊かなライフスタイルをサポートします。
            </p>
          </div>
        </div>
      </div>

      {/* Services */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-2xl font-light tracking-wider mb-12 text-center">サービス</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service) => (
              <div key={service.title} className="border p-8">
                <h3 className="text-xl font-light tracking-wider mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mr-3"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-light tracking-wider mb-12 text-center">取扱物件</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {properties.map((property) => (
              <div key={property.id} className="bg-white overflow-hidden">
                <div className="aspect-[16/10] relative bg-gray-200">
                  {/* Image placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <span>Property Image</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-gray-900 text-white px-3 py-1 text-sm">
                    {property.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light mb-2">{property.title}</h3>
                  <p className="text-2xl font-light mb-4">{property.price}</p>
                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm text-gray-600">
                    <div>
                      <span className="block text-gray-500">間取り</span>
                      {property.layout}
                    </div>
                    <div>
                      <span className="block text-gray-500">面積</span>
                      {property.area}
                    </div>
                    <div>
                      <span className="block text-gray-500">所在地</span>
                      {property.location}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {property.features.map((feature, index) => (
                      <span key={index} className="text-xs bg-gray-100 px-2 py-1">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="#" 
              className="inline-block border border-gray-900 text-gray-900 px-8 py-4 hover:bg-gray-900 hover:text-white transition-colors"
            >
              物件一覧を見る
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-light tracking-wider mb-12 text-center">ご利用の流れ</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm mr-6 flex-shrink-0 mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">お問い合わせ・ご相談</h3>
                  <p className="text-gray-600 text-sm">
                    お電話またはメールフォームよりお気軽にお問い合わせください。
                    専門スタッフがご要望をお伺いします。
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm mr-6 flex-shrink-0 mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">物件ご紹介・現地ご案内</h3>
                  <p className="text-gray-600 text-sm">
                    ご希望に合った物件をご紹介し、
                    実際に現地をご覧いただきます。
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm mr-6 flex-shrink-0 mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">申込・審査</h3>
                  <p className="text-gray-600 text-sm">
                    お気に入りの物件が見つかりましたら、
                    お申込手続きをサポートします。
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm mr-6 flex-shrink-0 mt-1">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">ご契約</h3>
                  <p className="text-gray-600 text-sm">
                    重要事項説明から契約締結まで、
                    安心してお取引いただけるようサポートします。
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm mr-6 flex-shrink-0 mt-1">
                  5
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">アフターフォロー</h3>
                  <p className="text-gray-600 text-sm">
                    ご契約後も、不動産に関するご相談に
                    継続的に対応いたします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-light tracking-wider mb-12 text-center">選ばれる理由</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-light mb-4">20+</div>
                <h3 className="text-lg font-medium mb-2">年の実績</h3>
                <p className="text-gray-600 text-sm">
                  豊富な経験と実績で
                  安心のサポート
                </p>
              </div>
              <div>
                <div className="text-3xl font-light mb-4">1000+</div>
                <h3 className="text-lg font-medium mb-2">取引実績</h3>
                <p className="text-gray-600 text-sm">
                  多くのお客様に
                  選ばれ続けています
                </p>
              </div>
              <div>
                <div className="text-3xl font-light mb-4">98%</div>
                <h3 className="text-lg font-medium mb-2">満足度</h3>
                <p className="text-gray-600 text-sm">
                  お客様の高い満足度を
                  維持しています
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-light tracking-wider mb-6">不動産のご相談</h2>
          <p className="text-gray-600 mb-8">
            売買、賃貸、投資など、<br />
            不動産に関するあらゆるご相談を承っております。
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block bg-gray-900 text-white px-8 py-4 hover:bg-gray-800 transition-colors"
            >
              お問い合わせ
            </Link>
            <Link 
              href="tel:0312345678" 
              className="inline-block border border-gray-900 text-gray-900 px-8 py-4 hover:bg-gray-100 transition-colors"
            >
              03-1234-5678
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EstatePage