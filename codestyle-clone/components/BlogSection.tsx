import React from 'react'

const blogPosts = [
  {
    id: 1,
    title: 'MINI GYM 365 #3',
    date: '2026.01.19',
    image: '/images/blog1.jpg',
  },
  {
    id: 2,
    title: '引き算で形づくったシンプルでミニマルなモノトーン空間【リノベオーナーインタビュー】',
    date: '2026.01.14',
    image: '/images/blog2.jpg',
  },
  {
    id: 3,
    title: 'MINI GYM 365 #2',
    date: '2026.01.13',
    image: '/images/blog3.jpg',
  },
  {
    id: 4,
    title: '明るく、たおやかな光と、センスに満ちた空間がもたらす、家族みんなの憂いの風景【リノベオーナーインタビュー】',
    date: '2026.01.07',
    image: '/images/blog4.jpg',
  },
  {
    id: 5,
    title: 'MINI GYM 365 #1',
    date: '2026.01.06',
    image: '/images/blog5.jpg',
  },
  {
    id: 6,
    title: '眺望が素晴らしい、モスグリーンの家【リノベオーナーインタビュー】',
    date: '2025.12.11',
    image: '/images/blog6.jpg',
  },
]

const BlogSection = () => {
  return (
    <section className="py-20 bg-gray-50">
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
              <div className="aspect-w-16 aspect-h-10 bg-gray-200 mb-4 overflow-hidden">
                <div className="w-full h-56 bg-gray-300 group-hover:scale-105 transition-transform duration-300">
                  {/* Image placeholder */}
                  <div className="flex items-center justify-center h-full text-gray-500">
                    Image
                  </div>
                </div>
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