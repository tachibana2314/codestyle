import React from 'react'
import Image from 'next/image'

const blogPosts = [
  {
    id: 1,
    title: 'MINI GYM 365 #3',
    date: '2026.01.19',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=500&fit=crop',
  },
  {
    id: 2,
    title: '引き算で形づくったシンプルでミニマルなモノトーン空間【リノベオーナーインタビュー】',
    date: '2026.01.14',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=500&fit=crop',
  },
  {
    id: 3,
    title: 'MINI GYM 365 #2',
    date: '2026.01.13',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=500&fit=crop',
  },
  {
    id: 4,
    title: '明るく、たおやかな光と、センスに満ちた空間がもたらす、家族みんなの憂いの風景【リノベオーナーインタビュー】',
    date: '2026.01.07',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop',
  },
  {
    id: 5,
    title: 'MINI GYM 365 #1',
    date: '2026.01.06',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop',
  },
  {
    id: 6,
    title: '眺望が素晴らしい、モスグリーンの家【リノベオーナーインタビュー】',
    date: '2025.12.11',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=500&fit=crop',
  },
]

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-sm md:text-base tracking-widest text-gray-600 mb-4">
            BLOG
          </h2>
          <p className="text-3xl md:text-4xl font-light">ブログ</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="relative w-full h-56 bg-gray-200 mb-4 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-base font-medium mb-2 line-clamp-2 group-hover:text-gray-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500">{post.date}</p>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-gray-900 text-sm tracking-wider hover:bg-gray-900 hover:text-white transition-colors">
            BLOG
          </button>
        </div>
      </div>
    </section>
  )
}

export default BlogSection