import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    id: 1,
    title: 'RENOVATION',
    subtitle: 'マンションリノベーション／戸建てリノベーション',
    description: '映画や音楽を楽しんだり、アウトドアを楽しんだり、家族とゆっくり過ごしたり。ライフスタイルにマッチしたリノベーションで暮らしのアップデートを。',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=450&fit=crop',
    link: '/service/renovation',
  },
  {
    id: 2,
    title: 'SHOP DESIGN',
    subtitle: '飲食店／美容室／カフェ／バー／アパレル／ベーカリー etc',
    description: '廃ることないトラディショナルなデザインを現代にリワークし、流行にとらわれ過ぎず、長く愛されるお店をつくることをポリシーとしています。',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=450&fit=crop',
    link: '/service/shop-design',
  },
  {
    id: 3,
    title: 'OFFICE DESIGN',
    subtitle: 'オフィスデザイン／オフィスリノベーション',
    description: '新しいオフィススタンダードを目指し、空間、家具や照明、音響、グリーンのコーディネートまでをトータルでプランニングします。',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=450&fit=crop',
    link: '/service/office-design',
  },
  {
    id: 4,
    title: 'tsumugite HOUSE',
    subtitle: '新築戸建て／注文住宅／企画住宅',
    description: '理想の場所に、理想の家を"建てる"。既成概念に囚われない新しい住宅をご提案するのがtsumugiteの役割です。',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=450&fit=crop',
    link: '/service/code-house',
  },
  {
    id: 5,
    title: 'FURNITURE',
    subtitle: 'オリジナル家具／セミオーダー家具',
    description: '日本有数の材木の町、福岡県大川市で取り扱っている良質な無垢材を使用し、職人の手により生み出される純国産の家具、それがtsumugite FURNITUREです。',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=450&fit=crop',
    link: '/service/furniture',
  },
  {
    id: 6,
    title: 'BUILDING DESIGN',
    subtitle: 'ビルデザイン',
    description: '賃貸・分譲マンションやビルの外観、内観をtsumugiteらしくデザイン。ビル名やサインまでを含めたブランディングを行います。',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=450&fit=crop',
    link: '/service/building-design',
  },
  {
    id: 7,
    title: 'ESTATE',
    subtitle: 'リノベ向け不動産情報',
    description: 'tsumugiteがお届けするリノベーション向け不動産情報。',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=450&fit=crop',
    link: '/service/estate',
  },
]

const ServiceSection = () => {
  return (
    <section id="service" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-sm md:text-base tracking-widest text-gray-600 mb-4">
            SERVICE
          </h2>
          <p className="text-3xl md:text-4xl font-light">サービス</p>
        </div>
        
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
              <div className="lg:w-1/2">
                <div className="bg-gray-200 aspect-video relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 space-y-4">
                <Link href={service.link} className="group">
                  <h3 className="text-2xl font-light group-hover:text-gray-600 transition-colors">{service.title}</h3>
                </Link>
                <p className="text-sm text-gray-600">{service.subtitle}</p>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
                <Link
                  href={service.link}
                  className="inline-block text-sm tracking-wider border-b border-gray-900 hover:border-gray-600 hover:text-gray-600 transition-colors"
                >
                  詳細を見る →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceSection