import React from 'react'

const services = [
  {
    id: 1,
    title: 'RENOVATION',
    subtitle: 'マンションリノベーション／戸建てリノベーション',
    description: '映画や音楽を楽しんだり、アウトドアを楽しんだり、家族とゆっくり過ごしたり。ライフスタイルにマッチしたリノベーションで暮らしのアップデートを。',
    image: '/images/service1.jpg',
  },
  {
    id: 2,
    title: 'SHOP DESIGN',
    subtitle: '飲食店／美容室／カフェ／バー／アパレル／ベーカリー etc',
    description: '廃ることないトラディショナルなデザインを現代にリワークし、流行にとらわれ過ぎず、長く愛されるお店をつくることをポリシーとしています。',
    image: '/images/service2.jpg',
  },
  {
    id: 3,
    title: 'OFFICE DESIGN',
    subtitle: 'オフィスデザイン／オフィスリノベーション',
    description: '新しいオフィススタンダードを目指し、空間、家具や照明、音響、グリーンのコーディネートまでをトータルでプランニングします。',
    image: '/images/service3.jpg',
  },
  {
    id: 4,
    title: 'CODE HOUSE',
    subtitle: '新築戸建て／注文住宅／企画住宅',
    description: '理想の場所に、理想の家を"建てる"。既成概念に囚われない新しい住宅をご提案するのがCODE STYLEの役割です。',
    image: '/images/service4.jpg',
  },
  {
    id: 5,
    title: 'FURNITURE',
    subtitle: 'オリジナル家具／セミオーダー家具',
    description: '日本有数の材木の町、福岡県大川市で取り扱っている良質な無垢材を使用し、職人の手により生み出される純国産の家具、それがCODE FURNITUREです。',
    image: '/images/service5.jpg',
  },
  {
    id: 6,
    title: 'BUILDING DESIGN',
    subtitle: 'ビルデザイン',
    description: '賃貸・分譲マンションやビルの外観、内観をCODE STYLEらしくデザイン。ビル名やサインまでを含めたブランディングを行います。',
    image: '/images/service6.jpg',
  },
  {
    id: 7,
    title: 'ESTATE',
    subtitle: 'リノベ向け不動産情報',
    description: 'CODE STYLEがお届けするリノベーション向け不動産情報。',
    image: '/images/service7.jpg',
  },
]

const ServiceSection = () => {
  return (
    <section className="py-20 bg-white">
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
                <div className="bg-gray-200 aspect-video">
                  {/* Image placeholder */}
                  <div className="flex items-center justify-center h-full text-gray-500">
                    Service Image
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 space-y-4">
                <h3 className="text-2xl font-light">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.subtitle}</p>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceSection