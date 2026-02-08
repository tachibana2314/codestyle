'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useParams } from 'next/navigation'

const blogData: { [key: string]: any } = {
  '1': {
    id: '1',
    title: 'MINI GYM 365 #3',
    date: '2026.01.19',
    category: 'FITNESS',
    author: '田中 健一',
    readTime: '5分',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1200&h=600&fit=crop',
    content: `
      <h2>フィットネスジムの新しいコンセプト</h2>
      <p>私たちが提案する「MINI GYM 365」は、従来の大型ジムとは異なるアプローチを採用しています。限られたスペースでも、最大限の効果を得られるよう設計されており、365日いつでも快適に利用できる環境を整えています。</p>

      <h3>空間設計のポイント</h3>
      <p>まず重要なのは、動線の最適化です。利用者がストレスなく移動でき、効率的にトレーニングを行えるよう、機器の配置には特に注意を払いました。また、自然光を最大限に取り入れることで、開放的で明るい雰囲気を演出しています。</p>

      <blockquote>
        「限られた空間でも、工夫次第で快適なトレーニング環境は作れる」
      </blockquote>

      <h3>マテリアルの選定</h3>
      <p>床材には、衝撃吸収性に優れた特殊なラバー素材を使用。壁面には、音響効果も考慮した吸音材を採用しています。これにより、隣接する空間への騒音を最小限に抑えることができます。</p>

      <h3>照明計画</h3>
      <p>時間帯によって変化する照明システムを導入。朝は爽やかな白色光で目覚めを促し、夕方以降は温かみのある電球色で、リラックスした雰囲気を演出します。</p>

      <h3>今後の展開</h3>
      <p>MINI GYM 365のコンセプトは、今後さらに進化していく予定です。IoT技術を活用した機器の導入や、パーソナルトレーニングに特化したスペースの設置など、利用者のニーズに応じたカスタマイズが可能な空間づくりを目指しています。</p>
    `,
    images: [
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop',
    ],
  },
  '2': {
    id: '2',
    title: '引き算で形づくったシンプルでミニマルなモノトーン空間【リノベオーナーインタビュー】',
    date: '2026.01.14',
    category: 'RENOVATION',
    author: '山田 美咲',
    readTime: '8分',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=600&fit=crop',
    content: `
      <h2>ミニマリズムを追求した理想の住まい</h2>
      <p>今回は、築30年のマンションをフルリノベーションされたオーナー様にお話を伺いました。「引き算の美学」をコンセプトに、必要最小限のものだけで構成された空間は、シンプルでありながら豊かな生活を実現しています。</p>

      <h3>リノベーションのきっかけ</h3>
      <p>「以前の住まいは、物で溢れていました。整理整頓をしても、すぐに散らかってしまう。そんな生活に疲れていたんです」とオーナー様は振り返ります。「思い切って、本当に必要なものだけを残し、それ以外はすべて手放すことにしました」</p>

      <h3>デザインのこだわり</h3>
      <p>カラーパレットは、白、グレー、黒のモノトーンに統一。素材感を大切にし、コンクリート、スチール、ガラスなど、無機質な素材を中心に構成しています。</p>

      <blockquote>
        「色を減らすことで、光と影、素材の質感がより際立つようになりました」
      </blockquote>

      <h3>収納の工夫</h3>
      <p>壁面収納を活用し、生活感を極力排除。扉付きの収納を多用することで、視覚的なノイズを最小限に抑えています。また、家具は造作で統一し、空間との一体感を演出しています。</p>

      <h3>暮らしの変化</h3>
      <p>「物が少なくなったことで、掃除が楽になり、時間に余裕が生まれました。その分、本当に大切なことに時間を使えるようになったんです」とオーナー様。ミニマルな空間が、豊かな時間をもたらしているようです。</p>

      <h3>これからリノベーションを考える方へ</h3>
      <p>「まずは、自分にとって本当に必要なものは何かを見極めることが大切です。そして、それを美しく配置できる空間を設計する。引き算の発想で考えると、本当に心地よい空間が生まれると思います」</p>
    `,
    images: [
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
    ],
  },
  '3': {
    id: '3',
    title: 'MINI GYM 365 #2',
    date: '2026.01.13',
    category: 'FITNESS',
    author: '田中 健一',
    readTime: '6分',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&h=600&fit=crop',
    content: `
      <h2>コンパクトスペースの有効活用</h2>
      <p>都市部では、限られたスペースをいかに有効活用するかが重要な課題です。MINI GYM 365 #2では、わずか50平米の空間に、本格的なトレーニング設備を配置しました。</p>

      <h3>マルチファンクショナルな機器選定</h3>
      <p>一つの機器で複数のトレーニングが可能な製品を厳選。パワーラック、アジャスタブルベンチ、ケーブルマシンなど、基本的な機能を網羅しながらも、省スペース化を実現しています。</p>

      <h3>ゾーニングの工夫</h3>
      <p>有酸素運動エリア、ウェイトトレーニングエリア、ストレッチエリアを明確に分け、それぞれの活動に集中できる環境を整えました。視線の抜けを意識した配置により、圧迫感のない開放的な空間を演出しています。</p>

      <blockquote>
        「小さな空間でも、レイアウト次第で機能的なジムは作れる」
      </blockquote>

      <h3>ミラーワークの効果</h3>
      <p>壁面全体にミラーを設置することで、空間を視覚的に広げる効果を狙いました。また、フォームチェックにも役立ち、安全で効果的なトレーニングをサポートします。</p>

      <h3>換気システムの重要性</h3>
      <p>コンパクトな空間だからこそ、換気は重要です。24時間換気システムに加え、局所換気扇を設置。常に新鮮な空気を供給し、快適なトレーニング環境を維持しています。</p>
    `,
    images: [
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop',
    ],
  },
  '4': {
    id: '4',
    title: '明るく、たおやかな光と、センスに満ちた空間がもたらす、家族みんなの憂いの風景【リノベオーナーインタビュー】',
    date: '2026.01.07',
    category: 'RENOVATION',
    author: '山田 美咲',
    readTime: '10分',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=600&fit=crop',
    content: `
      <h2>光と家族の物語</h2>
      <p>都心から少し離れた静かな住宅街。築40年の一軒家を、家族4人の新しい住まいへと生まれ変わらせたリノベーションプロジェクトをご紹介します。</p>

      <h3>自然光を最大限に活かす</h3>
      <p>「朝日で目覚め、夕日と共に一日を終える。そんな自然のリズムに寄り添った生活がしたかった」とオーナー様。南向きの大開口を設け、一日中明るい光が差し込む空間を実現しました。</p>

      <h3>家族の成長と共に変化する空間</h3>
      <p>子供部屋は、将来的に2つに分割できる設計に。可動式の間仕切りを採用し、ライフステージに合わせてフレキシブルに対応できるようになっています。</p>

      <blockquote>
        「10年後、20年後の家族の姿を想像しながら、設計を進めました」
      </blockquote>

      <h3>センスあふれるインテリア</h3>
      <p>オーナー様がセレクトした北欧家具と、造作家具が見事に調和。温かみのある木材と、モダンなスチールの組み合わせが、洗練された雰囲気を演出しています。</p>

      <h3>家族の集まる場所</h3>
      <p>リビングダイニングは、家族が自然と集まる場所に。キッチンはオープンスタイルで、料理をしながら家族との会話を楽しめます。「週末は、みんなでキッチンに立つのが楽しみです」とオーナー様は微笑みます。</p>

      <h3>プライベートスペースの確保</h3>
      <p>家族との時間を大切にしながらも、一人の時間も重要。書斎や趣味の部屋など、それぞれのプライベートスペースも充実させました。</p>

      <h3>これから家づくりを考える方へ</h3>
      <p>「家は、家族の成長と共に変化していくもの。今だけでなく、未来も見据えた設計が大切だと感じています。そして何より、家族みんなが心地よく過ごせる空間であることが一番重要です」</p>
    `,
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
    ],
  },
  '5': {
    id: '5',
    title: 'MINI GYM 365 #1',
    date: '2026.01.06',
    category: 'FITNESS',
    author: '田中 健一',
    readTime: '7分',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=600&fit=crop',
    content: `
      <h2>新シリーズ「MINI GYM 365」始動</h2>
      <p>tsumugiteが提案する新しいジムのかたち「MINI GYM 365」。このシリーズでは、365日、毎日使いたくなるジムの空間デザインを追求していきます。</p>

      <h3>コンセプトの背景</h3>
      <p>コロナ禍を経て、人々の健康意識は大きく変わりました。在宅ワークの増加により、運動不足を感じる人が増え、身近な場所でトレーニングできる環境が求められています。</p>

      <h3>MINI GYMの3つの特徴</h3>
      <p>1. コンパクト：限られたスペースでも設置可能<br/>
      2. 機能的：必要十分な設備を厳選<br/>
      3. デザイン性：インテリアと調和する美しさ</p>

      <blockquote>
        「ジムは、もっと身近で、もっと美しい空間であるべき」
      </blockquote>

      <h3>ターゲットユーザー</h3>
      <p>マンションの共用施設、オフィスビルの福利厚生施設、個人宅のプライベートジムなど、様々なシーンでの活用を想定しています。</p>

      <h3>サステナブルな設計</h3>
      <p>環境に配慮した素材選定、省エネルギー設計、メンテナンスのしやすさなど、長期的な視点でサステナブルな空間づくりを心がけています。</p>

      <h3>今後の展開</h3>
      <p>このシリーズでは、実際の施工事例を通じて、MINI GYMの可能性を探っていきます。次回は、実際にマンションの共用部に設置した事例をご紹介する予定です。</p>
    `,
    images: [
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
    ],
  },
  '6': {
    id: '6',
    title: '眺望が素晴らしい、モスグリーンの家【リノベオーナーインタビュー】',
    date: '2025.12.11',
    category: 'RENOVATION',
    author: '山田 美咲',
    readTime: '9分',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&h=600&fit=crop',
    content: `
      <h2>高台に佇む、自然と調和する住まい</h2>
      <p>市街地を一望できる高台に位置する、築35年の住宅。眺望を最大限に活かしながら、モスグリーンをアクセントに採用した個性的なリノベーションが完成しました。</p>

      <h3>ロケーションを活かす設計</h3>
      <p>「この眺望が気に入って、この家を選びました」とオーナー様。リビングの大開口からは、市街地の景色が一望でき、夜景も楽しめます。カーテンを開けた瞬間、まるで絵画のような風景が広がります。</p>

      <h3>モスグリーンという選択</h3>
      <p>「周囲の緑と調和する色を探していて、モスグリーンに辿り着きました」。キッチン、建具、アクセントウォールなど、要所にモスグリーンを配置。落ち着いた色合いが、空間に深みを与えています。</p>

      <blockquote>
        「自然の中にある色だから、飽きることがない」
      </blockquote>

      <h3>開放感と プライバシーの両立</h3>
      <p>眺望を楽しみながらも、プライバシーは確保。高台という立地を活かし、外からの視線を気にすることなく、開放的な生活を楽しめます。</p>

      <h3>季節を感じる暮らし</h3>
      <p>「春は桜、夏は新緑、秋は紅葉、冬は雪景色。季節の移ろいを身近に感じられます」。大きな窓は、まるで額縁のように、四季折々の風景を切り取ります。</p>

      <h3>素材へのこだわり</h3>
      <p>床材には無垢のオーク材を使用。経年変化を楽しめる素材を選びました。壁は珪藻土で仕上げ、調湿効果も期待できます。</p>

      <h3>これからの暮らし</h3>
      <p>「毎朝、この景色を見ながらコーヒーを飲むのが日課になりました。この家で、ゆっくりと時間を過ごしていきたいです」とオーナー様は語ります。</p>
    `,
    images: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&h=600&fit=crop',
    ],
  },
}

// 関連記事のデータ
const relatedPosts = [
  {
    id: '7',
    title: 'カフェバー「Cultiva」のインテリアデザイン',
    date: '2025.12.05',
    category: 'SHOP',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop',
  },
  {
    id: '8',
    title: 'オフィスリノベーション：クリエイティブな働き方を実現する空間',
    date: '2025.11.28',
    category: 'OFFICE',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
  },
  {
    id: '9',
    title: 'tsumugite FURNITUREの新作発表',
    date: '2025.11.20',
    category: 'FURNITURE',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
  },
]

export default function BlogDetailPage() {
  const params = useParams()
  const blog = blogData[params.id as string] || blogData['1']

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Image */}
      <section className="relative h-[60vh] bg-gray-200">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container-custom">
            <div className="max-w-4xl">
              <span className="inline-block bg-white text-gray-900 px-3 py-1 text-sm mb-4">
                {blog.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-light mb-4">{blog.title}</h1>
              <div className="flex items-center gap-6 text-sm">
                <span>{blog.date}</span>
                <span>{blog.author}</span>
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Content */}
            <div
              className="prose prose-lg max-w-none blog-content"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Image Gallery */}
            {blog.images && blog.images.length > 0 && (
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                {blog.images.map((image: string, index: number) => (
                  <div key={index} className="relative aspect-video bg-gray-200">
                    <Image
                      src={image}
                      alt={`${blog.title} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Share Buttons */}
            <div className="mt-12 pt-8 border-t">
              <p className="text-sm text-gray-600 mb-4">この記事をシェア</p>
              <div className="flex gap-4">
                <button className="px-6 py-2 bg-gray-900 text-white text-sm hover:bg-gray-800 transition-colors">
                  Twitter
                </button>
                <button className="px-6 py-2 bg-gray-900 text-white text-sm hover:bg-gray-800 transition-colors">
                  Facebook
                </button>
                <button className="px-6 py-2 bg-gray-900 text-white text-sm hover:bg-gray-800 transition-colors">
                  LINE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-light mb-8">関連記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <article key={post.id} className="group">
                <Link href={`/blog/${post.id}`}>
                  <div className="relative aspect-video bg-gray-200 mb-4 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">{post.date}</p>
                    <h3 className="text-base line-clamp-2 group-hover:text-gray-600 transition-colors">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        .blog-content h2 {
          font-size: 1.75rem;
          font-weight: 300;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          letter-spacing: 0.05em;
        }
        .blog-content h3 {
          font-size: 1.375rem;
          font-weight: 400;
          margin-top: 2rem;
          margin-bottom: 1rem;
          letter-spacing: 0.025em;
        }
        .blog-content p {
          line-height: 1.8;
          margin-bottom: 1.5rem;
          color: #374151;
        }
        .blog-content blockquote {
          border-left: 3px solid #111827;
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: #4B5563;
        }
      `}</style>
    </main>
  )
}