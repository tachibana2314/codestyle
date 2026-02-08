'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'

// Mock data for works - In production, this would come from a database or CMS
const worksData = {
  '1': {
    id: '1',
    title: '青山フラッグシップストア',
    category: 'SHOP',
    client: '株式会社ABC',
    location: '東京都港区青山',
    area: '250㎡',
    completion: '2023年12月',
    description: 'ミニマルで洗練された空間デザインを追求したフラッグシップストア。ブランドの世界観を体現する空間として、素材選びから照明計画まで細部にこだわり抜いた店舗設計です。',
    concept: '「Less is More」をコンセプトに、商品の魅力を最大限に引き立てる空間を創造。白を基調とした空間に、天然木のアクセントを加えることで、温かみのある洗練された雰囲気を演出しています。',
    features: [
      '自然光を最大限活用した照明計画',
      'フレキシブルな什器システム',
      '環境に配慮したサステナブルな素材選定',
      'ブランドアイデンティティを表現する空間構成'
    ],
    images: [
      '/images/work-1-1.jpg',
      '/images/work-1-2.jpg',
      '/images/work-1-3.jpg',
      '/images/work-1-4.jpg'
    ],
    relatedWorks: ['2', '5', '8']
  },
  '2': {
    id: '2',
    title: '代官山レストラン',
    category: 'RESTAURANT',
    client: 'レストラングループXYZ',
    location: '東京都渋谷区代官山',
    area: '180㎡',
    completion: '2023年10月',
    description: 'カジュアルでありながら上質な食事体験を提供するレストラン。開放的な空間設計と温かみのある内装で、ゲストに特別な時間を提供します。',
    concept: '「Urban Oasis」都市の中のオアシスをテーマに、都会の喧騒から離れ、ゆったりとした時間を過ごせる空間を創造。グリーンを効果的に配置し、自然を感じられる癒しの空間を実現しました。',
    features: [
      'オープンキッチンを中心とした動線設計',
      'プライベート感のある個室空間',
      'アコースティック設計による快適な音環境',
      'テラス席との一体感ある空間構成'
    ],
    images: [
      '/images/work-2-1.jpg',
      '/images/work-2-2.jpg',
      '/images/work-2-3.jpg',
      '/images/work-2-4.jpg'
    ],
    relatedWorks: ['3', '6', '9']
  },
  '3': {
    id: '3',
    title: 'IT企業オフィス',
    category: 'OFFICE',
    client: 'テクノロジー株式会社',
    location: '東京都港区六本木',
    area: '800㎡',
    completion: '2023年8月',
    description: 'クリエイティビティと生産性を最大化するオフィス空間。ABW（Activity Based Working）の考え方を取り入れ、多様な働き方に対応する環境を実現しました。',
    concept: '「Creative Hub」創造性を育むハブとして、コラボレーションとコンセントレーションのバランスを重視。様々なワークスタイルに対応できるフレキシブルな空間設計を行いました。',
    features: [
      'ABWに基づく多様なワークスペース',
      'リフレッシュスペースの充実',
      'オンライン会議に最適化された防音ブース',
      'バイオフィリックデザインの導入'
    ],
    images: [
      '/images/work-3-1.jpg',
      '/images/work-3-2.jpg',
      '/images/work-3-3.jpg',
      '/images/work-3-4.jpg'
    ],
    relatedWorks: ['4', '7', '10']
  },
  '4': {
    id: '4',
    title: '目黒区個人邸',
    category: 'RESIDENCE',
    client: '個人',
    location: '東京都目黒区',
    area: '120㎡',
    completion: '2023年6月',
    description: 'ミニマルで機能的な住空間。家族のライフスタイルに寄り添い、日々の生活を豊かにする住宅リノベーションです。',
    concept: '「Simple & Functional」シンプルさと機能性の融合。無駄を削ぎ落とし、本当に必要なものだけを残すことで、豊かな暮らしを実現する空間を創造しました。',
    features: [
      '収納を最大化した間取り設計',
      '自然光を活かした明るい空間',
      '家事動線を考慮したレイアウト',
      'フレキシブルに使える多目的空間'
    ],
    images: [
      '/images/work-4-1.jpg',
      '/images/work-4-2.jpg',
      '/images/work-4-3.jpg',
      '/images/work-4-4.jpg'
    ],
    relatedWorks: ['11', '12', '13']
  },
  '5': {
    id: '5',
    title: '表参道ヘアサロン',
    category: 'SALON',
    client: 'ビューティーサロングループ',
    location: '東京都渋谷区表参道',
    area: '150㎡',
    completion: '2023年5月',
    description: 'ラグジュアリーとリラクゼーションを融合させたヘアサロン。お客様に特別な体験を提供する、洗練された空間デザインです。',
    concept: '「Modern Luxury」現代的な贅沢さを追求。上質な素材と繊細なディテールで、日常から離れた特別な時間を演出する空間を創造しました。',
    features: [
      'プライバシーに配慮した半個室設計',
      '最新設備を備えたシャンプー台',
      'カラーの見え方を考慮した照明計画',
      'VIP専用の完全個室空間'
    ],
    images: [
      '/images/work-5-1.jpg',
      '/images/work-5-2.jpg',
      '/images/work-5-3.jpg',
      '/images/work-5-4.jpg'
    ],
    relatedWorks: ['1', '2', '8']
  },
  '6': {
    id: '6',
    title: '吉祥寺カフェ',
    category: 'CAFE',
    client: 'カフェチェーン',
    location: '東京都武蔵野市吉祥寺',
    area: '100㎡',
    completion: '2023年4月',
    description: '地域に愛されるコミュニティカフェ。居心地の良さと機能性を両立させた、誰もが気軽に立ち寄れる空間です。',
    concept: '「Community Living Room」地域のリビングルームとして、様々な人が集い、交流できる場所。温かみのある素材と色使いで、アットホームな雰囲気を演出しました。',
    features: [
      'バリアフリー設計',
      'コワーキングスペースの併設',
      'キッズフレンドリーな設備',
      '地域イベント対応可能なレイアウト'
    ],
    images: [
      '/images/work-6-1.jpg',
      '/images/work-6-2.jpg',
      '/images/work-6-3.jpg',
      '/images/work-6-4.jpg'
    ],
    relatedWorks: ['2', '9', '14']
  },
  '7': {
    id: '7',
    title: '渋谷クリエイティブオフィス',
    category: 'OFFICE',
    client: 'クリエイティブエージェンシー',
    location: '東京都渋谷区',
    area: '500㎡',
    completion: '2023年3月',
    description: 'クリエイティブな発想を促進する刺激的なオフィス空間。遊び心と機能性を兼ね備えた、次世代型ワークプレイスです。',
    concept: '「Play & Work」遊びと仕事の境界を曖昧にし、創造性を最大限に引き出す環境。カラフルで楽しい要素を取り入れながら、集中できる環境も確保しました。',
    features: [
      'ブレインストーミング専用スペース',
      'リラックスできるハンモックエリア',
      'スタンディングデスクの導入',
      '音楽スタジオ併設'
    ],
    images: [
      '/images/work-7-1.jpg',
      '/images/work-7-2.jpg',
      '/images/work-7-3.jpg',
      '/images/work-7-4.jpg'
    ],
    relatedWorks: ['3', '4', '10']
  },
  '8': {
    id: '8',
    title: '銀座ブティック',
    category: 'SHOP',
    client: 'ファッションブランド',
    location: '東京都中央区銀座',
    area: '200㎡',
    completion: '2023年2月',
    description: '高級ファッションブランドの世界観を表現したブティック。ラグジュアリーとアートが融合した、唯一無二の空間体験を提供します。',
    concept: '「Art Gallery Boutique」アートギャラリーとブティックの融合。商品をアート作品のように展示し、ショッピングを文化的体験へと昇華させる空間を創造しました。',
    features: [
      'アート作品のような商品ディスプレイ',
      'VIPルームの設置',
      'インタラクティブなデジタルサイネージ',
      'シーズンごとに変更可能な可動式什器'
    ],
    images: [
      '/images/work-8-1.jpg',
      '/images/work-8-2.jpg',
      '/images/work-8-3.jpg',
      '/images/work-8-4.jpg'
    ],
    relatedWorks: ['1', '5', '15']
  },
  '9': {
    id: '9',
    title: '恵比寿バー',
    category: 'BAR',
    client: 'バーオーナー',
    location: '東京都渋谷区恵比寿',
    area: '80㎡',
    completion: '2023年1月',
    description: '大人の隠れ家的バー。落ち着いた雰囲気の中で、特別な時間を過ごせる空間を創造しました。',
    concept: '「Hidden Gem」都会の喧騒から離れた隠れ家。重厚感のある素材と間接照明で、大人の時間を演出する落ち着いた空間を実現しました。',
    features: [
      'アコースティック設計による静謐な環境',
      'カスタムメイドのバーカウンター',
      'ウイスキーセラーの設置',
      'プライベート感のあるブース席'
    ],
    images: [
      '/images/work-9-1.jpg',
      '/images/work-9-2.jpg',
      '/images/work-9-3.jpg',
      '/images/work-9-4.jpg'
    ],
    relatedWorks: ['2', '6', '16']
  },
  '10': {
    id: '10',
    title: '品川コワーキングスペース',
    category: 'OFFICE',
    client: 'コワーキング運営会社',
    location: '東京都港区品川',
    area: '1000㎡',
    completion: '2022年12月',
    description: '多様なワークスタイルに対応するコワーキングスペース。個人からチームまで、あらゆるニーズに応える柔軟な空間設計です。',
    concept: '「Flexible Workspace」柔軟性を最大限に追求。固定観念にとらわれない自由な働き方を実現する、次世代型コワーキングスペースを創造しました。',
    features: [
      '24時間利用可能',
      '様々なタイプの会議室',
      'フォンブースの充実',
      'カフェ・キッチンエリアの併設'
    ],
    images: [
      '/images/work-10-1.jpg',
      '/images/work-10-2.jpg',
      '/images/work-10-3.jpg',
      '/images/work-10-4.jpg'
    ],
    relatedWorks: ['3', '4', '7']
  },
  '11': {
    id: '11',
    title: '世田谷区マンションリノベーション',
    category: 'RESIDENCE',
    client: '個人',
    location: '東京都世田谷区',
    area: '85㎡',
    completion: '2022年11月',
    description: 'ファミリー向けマンションの全面リノベーション。子育て世代のライフスタイルに最適化した、機能的で温かみのある住空間です。',
    concept: '「Family Nest」家族の巣として、安心感と快適性を追求。子供の成長に合わせて変化できる柔軟な間取りと、家族のコミュニケーションを促進する空間設計を行いました。',
    features: [
      '子供の安全に配慮した設計',
      'ファミリークローゼットの設置',
      '家族が集まるLDKの大空間化',
      'スタディコーナーの設置'
    ],
    images: [
      '/images/work-11-1.jpg',
      '/images/work-11-2.jpg',
      '/images/work-11-3.jpg',
      '/images/work-11-4.jpg'
    ],
    relatedWorks: ['4', '12', '13']
  },
  '12': {
    id: '12',
    title: '横浜戸建てリノベーション',
    category: 'RESIDENCE',
    client: '個人',
    location: '神奈川県横浜市',
    area: '150㎡',
    completion: '2022年10月',
    description: '築30年の戸建て住宅を現代的な住空間へとリノベーション。構造を活かしながら、新しい価値を創造しました。',
    concept: '「Reborn House」生まれ変わる家。既存の良さを残しながら、現代のライフスタイルに合わせた機能性と快適性を追加。新旧が調和する空間を創造しました。',
    features: [
      '耐震補強工事の実施',
      '断熱性能の向上',
      '自然エネルギーの活用',
      'ユニバーサルデザインの採用'
    ],
    images: [
      '/images/work-12-1.jpg',
      '/images/work-12-2.jpg',
      '/images/work-12-3.jpg',
      '/images/work-12-4.jpg'
    ],
    relatedWorks: ['4', '11', '13']
  }
}

const WorkDetailPage = () => {
  const params = useParams()
  const router = useRouter()
  const workId = params?.id as string
  const work = worksData[workId as keyof typeof worksData]

  const [selectedImage, setSelectedImage] = React.useState(0)

  if (!work) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light mb-4">作品が見つかりません</h1>
          <Link href="/works" className="text-gray-600 underline">
            作品一覧に戻る
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image */}
      <div className="pt-20">
        <div className="relative h-[60vh] bg-gray-200">
          {/* Main image placeholder */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            <span className="text-2xl">Main Project Image</span>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            {/* Title and Category */}
            <div className="mb-8">
              <div className="text-sm text-gray-500 mb-2">{work.category}</div>
              <h1 className="text-3xl md:text-4xl font-light tracking-wider mb-6">{work.title}</h1>
              <p className="text-gray-700 leading-relaxed">{work.description}</p>
            </div>

            {/* Project Details */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-xl font-light tracking-wider mb-4">プロジェクト詳細</h2>
                <dl className="space-y-3">
                  <div className="flex">
                    <dt className="text-gray-500 w-24">クライアント:</dt>
                    <dd className="text-gray-700">{work.client}</dd>
                  </div>
                  <div className="flex">
                    <dt className="text-gray-500 w-24">所在地:</dt>
                    <dd className="text-gray-700">{work.location}</dd>
                  </div>
                  <div className="flex">
                    <dt className="text-gray-500 w-24">面積:</dt>
                    <dd className="text-gray-700">{work.area}</dd>
                  </div>
                  <div className="flex">
                    <dt className="text-gray-500 w-24">竣工:</dt>
                    <dd className="text-gray-700">{work.completion}</dd>
                  </div>
                </dl>
              </div>

              <div>
                <h2 className="text-xl font-light tracking-wider mb-4">コンセプト</h2>
                <p className="text-gray-700 leading-relaxed">{work.concept}</p>
              </div>
            </div>

            {/* Features */}
            <div className="mb-12">
              <h2 className="text-xl font-light tracking-wider mb-4">特徴</h2>
              <ul className="grid md:grid-cols-2 gap-3">
                {work.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gray-400 mr-3">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-xl font-light tracking-wider mb-8 text-center">ギャラリー</h2>

          {/* Main Image Display */}
          <div className="max-w-5xl mx-auto mb-8">
            <div className="aspect-[16/10] bg-gray-200">
              <div className="h-full flex items-center justify-center text-gray-400">
                <span>Gallery Image {selectedImage + 1}</span>
              </div>
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-4 gap-4">
              {work.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-200 ${
                    selectedImage === index ? 'ring-2 ring-gray-900' : ''
                  }`}
                >
                  <div className="h-full flex items-center justify-center text-gray-400 text-sm">
                    Thumb {index + 1}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Works */}
      <section className="py-12">
        <div className="container-custom">
          <h2 className="text-xl font-light tracking-wider mb-8 text-center">関連作品</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {work.relatedWorks.map((relatedId) => {
              const relatedWork = worksData[relatedId as keyof typeof worksData]
              if (!relatedWork) return null

              return (
                <Link
                  key={relatedId}
                  href={`/works/${relatedId}`}
                  className="group"
                >
                  <div className="aspect-[4/3] bg-gray-200 mb-4 overflow-hidden">
                    <div className="h-full flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform">
                      <span>Related Work</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 mb-1">{relatedWork.category}</div>
                  <h3 className="text-lg font-light group-hover:text-gray-600 transition-colors">
                    {relatedWork.title}
                  </h3>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 border-t">
        <div className="container-custom">
          <div className="flex justify-between items-center max-w-5xl mx-auto">
            <button
              onClick={() => {
                const currentId = parseInt(workId)
                const prevId = currentId > 1 ? currentId - 1 : Object.keys(worksData).length
                router.push(`/works/${prevId}`)
              }}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span className="mr-2">←</span>
              <span>前の作品</span>
            </button>

            <Link
              href="/works"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              一覧に戻る
            </Link>

            <button
              onClick={() => {
                const currentId = parseInt(workId)
                const nextId = currentId < Object.keys(worksData).length ? currentId + 1 : 1
                router.push(`/works/${nextId}`)
              }}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span>次の作品</span>
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-light tracking-wider mb-6">プロジェクトのご相談</h2>
          <p className="text-gray-600 mb-8">
            このような空間づくりをご希望の方は、<br />
            お気軽にお問い合わせください。
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

export default WorkDetailPage