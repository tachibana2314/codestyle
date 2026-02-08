import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const historyData = [
  {
    year: '2007',
    title: 'tsumugite START',
    description: '2007年、tsumugite業務開始。建築のデザイン・施工に関わってきた経験と、アメリカやヨーロッパを旅し、観て感じてきたデザインなどを取り入れたショップ・住宅を具体化すべく、デザイン、施工業務をスタート。',
  },
  {
    year: '2009',
    title: 'tsumugite.,CO.LTD',
    description: '2009年、tsumugite法人化。福岡市内の様々なショップを手掛けさせていただく。',
  },
  {
    year: '2010',
    title: 'RENOVATION START',
    description: '2010年、住宅分野でtsumugiteのこだわりを形にすべく、リノベーション事業を新たにスタート。住む人の趣味や、使う素材、デザインにこだわりを持ったリノベーションを心がける。',
  },
  {
    year: '2011',
    title: 'FURNITURE START',
    description: '2011年、オリジナル家具の販売を本格的にスタート。オーク、ウォールナットの無垢材とスチールを組み合わせたセンチ単位でカスタム出来るオリジナル家具のウェブ販売スタート。',
  },
  {
    year: '2012',
    title: 'tsumugite YAKUIN',
    description: '2012年、福岡市中央区薬院にオフィス移転。マンションリノベーションをイメージしたショールームをオープン。',
  },
  {
    year: '2013',
    title: 'LABO by tsumugite OPEN',
    description: '2013年、tsumugiteのショップ＆ショールーム「LABO」オープン。セミオーダー家具や雑貨販売などを行いつつ、CODESTYLEが大事にするカルチャーをシェアするための音楽や映画、お酒をテーマにしたイベントをスタート。',
  },
  {
    year: '2014',
    title: 'CODE HOUSE START',
    description: '2014年、新築住宅事業をスタート。インテリアだけではなく、エクステリアまでこだわりを一貫させた住宅をつくり始める。',
  },
  {
    year: '2016',
    title: 'DESIGN PRODUCE START',
    description: '2016年、ビルや商業施設のデザインやプロデュース事業スタート。',
  },
  {
    year: '2018',
    title: 'tsumugite SHOWROOM OPEN',
    description: '2018年、LABOを改装し、空間デザインのショールームとしてリニューアルオープン。また、tsumugite設立10周年を迎える。',
  },
  {
    year: '2022',
    title: 'tsumugite OFFICE&LABO',
    description: '2022年、ショールームをオフィスへリノベーションし、オフィスを完全移設。',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container-custom">
          <h1 className="text-5xl md:text-7xl font-light tracking-wider mb-6">ABOUT</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            時代を超える普遍性を持つトラディショナルなデザインをベースに、
            暮らす人の趣味やライフスタイルにマッチした家を、
            流行にとらわれすぎない愛されるお店を、造り上げていくことがtsumugiteの仕事です。
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-light mb-6">COMPANY</h2>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm text-gray-500 mb-1">会社名</dt>
                  <dd className="text-lg">株式会社tsumugite</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500 mb-1">設立</dt>
                  <dd className="text-lg">2009年</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500 mb-1">代表取締役</dt>
                  <dd className="text-lg">-</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500 mb-1">所在地</dt>
                  <dd className="text-lg">福岡市中央区</dd>
                </div>
              </dl>
            </div>
            <div>
              <h2 className="text-2xl font-light mb-6">BUSINESS</h2>
              <ul className="space-y-2">
                <li className="text-lg">住宅リノベーション</li>
                <li className="text-lg">店舗デザイン・施工</li>
                <li className="text-lg">オフィスデザイン</li>
                <li className="text-lg">新築住宅設計・施工</li>
                <li className="text-lg">オリジナル家具製作・販売</li>
                <li className="text-lg">ビルデザイン・プロデュース</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-sm md:text-base tracking-widest text-gray-600 mb-4 text-center">HISTORY</h2>
          <p className="text-3xl md:text-4xl font-light text-center mb-16">沿革</p>
          
          <div className="max-w-4xl mx-auto">
            {historyData.map((item, index) => (
              <div key={index} className="flex gap-8 mb-12 pb-12 border-b border-gray-200 last:border-b-0">
                <div className="flex-shrink-0 w-20">
                  <span className="text-2xl font-light">{item.year}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}