'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const OfficeDesignPage = () => {
  const features = [
    {
      title: 'ワークスペース設計',
      description: '生産性を高める効率的なレイアウト'
    },
    {
      title: 'コミュニケーションスペース',
      description: 'チームのコラボレーションを促進する空間'
    },
    {
      title: 'リフレッシュエリア',
      description: '社員のリラックスと創造性を支える空間'
    },
    {
      title: 'ブランド表現',
      description: '企業文化を体現するオフィスデザイン'
    }
  ]

  const projects = [
    {
      id: 1,
      title: 'IT企業オフィス',
      image: '/images/office-1.jpg',
      description: 'オープンなコミュニケーションを重視したモダンオフィス',
      area: '500㎡',
      location: '港区'
    },
    {
      id: 2,
      title: 'クリエイティブエージェンシー',
      image: '/images/office-2.jpg',
      description: '創造性を刺激するカラフルで遊び心のあるオフィス空間',
      area: '300㎡',
      location: '渋谷区'
    },
    {
      id: 3,
      title: 'コンサルティングファーム',
      image: '/images/office-3.jpg',
      description: '信頼性とプロフェッショナルさを演出する洗練されたオフィス',
      area: '400㎡',
      location: '千代田区'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="pt-20 pb-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-light tracking-wider mb-6">OFFICE DESIGN</h1>
            <p className="text-gray-600 leading-relaxed">
              働く人の創造性と生産性を最大化し、<br />
              企業文化を体現するオフィス空間をデザインします。
            </p>
          </div>
        </div>
      </div>

      {/* Service Features */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-light tracking-wider mb-12 text-center">オフィスデザインの特徴</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="border-l-2 border-gray-200 pl-6">
                  <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-light tracking-wider mb-12 text-center">オフィスデザインのプロセス</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center mr-6">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">ヒアリング・現状分析</h3>
                  <p className="text-gray-600">
                    企業のビジョン、働き方、組織文化を理解し、
                    現状の課題と要望を整理します。
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center mr-6">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">コンセプト開発</h3>
                  <p className="text-gray-600">
                    分析結果をもとに、最適なオフィスコンセプトを
                    策定し、デザインの方向性を決定します。
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center mr-6">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">スペースプランニング</h3>
                  <p className="text-gray-600">
                    効率的な動線、ゾーニング、家具配置など、
                    詳細なレイアウトプランを作成します。
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center mr-6">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">デザイン開発</h3>
                  <p className="text-gray-600">
                    インテリアデザイン、照明計画、マテリアル選定など、
                    空間のデザインを具体化します。
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center mr-6">
                  5
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">施工・納品</h3>
                  <p className="text-gray-600">
                    高品質な施工と家具の納品を行い、
                    理想のオフィス空間を実現します。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-2xl font-light tracking-wider mb-12 text-center">オフィスデザイン事例</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white border overflow-hidden">
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

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-light tracking-wider mb-12 text-center">オフィスデザインの効果</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-light mb-4">+25%</div>
                <h3 className="text-lg font-medium mb-2">生産性向上</h3>
                <p className="text-gray-600 text-sm">
                  効率的なレイアウトと快適な環境により
                  生産性が向上します
                </p>
              </div>
              <div>
                <div className="text-3xl font-light mb-4">+40%</div>
                <h3 className="text-lg font-medium mb-2">社員満足度</h3>
                <p className="text-gray-600 text-sm">
                  快適な職場環境が
                  社員の満足度を高めます
                </p>
              </div>
              <div>
                <div className="text-3xl font-light mb-4">+30%</div>
                <h3 className="text-lg font-medium mb-2">採用力強化</h3>
                <p className="text-gray-600 text-sm">
                  魅力的なオフィスが
                  優秀な人材を引き付けます
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-light tracking-wider mb-6">オフィスデザインのご相談</h2>
          <p className="text-gray-600 mb-8">
            オフィス移転、リニューアル、新設など、<br />
            オフィスデザインに関するご相談はお気軽にお問い合わせください。
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

export default OfficeDesignPage