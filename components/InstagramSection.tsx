import React from 'react'

const instagramPosts = [
  { id: 1, image: '/images/instagram1.jpg' },
  { id: 2, image: '/images/instagram2.jpg' },
  { id: 3, image: '/images/instagram3.jpg' },
  { id: 4, image: '/images/instagram4.jpg' },
  { id: 5, image: '/images/instagram5.jpg' },
  { id: 6, image: '/images/instagram6.jpg' },
  { id: 7, image: '/images/instagram7.jpg' },
  { id: 8, image: '/images/instagram8.jpg' },
  { id: 9, image: '/images/instagram9.jpg' },
  { id: 10, image: '/images/instagram10.jpg' },
  { id: 11, image: '/images/instagram11.jpg' },
  { id: 12, image: '/images/instagram12.jpg' },
]

const InstagramSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-sm md:text-base tracking-widest text-gray-600 mb-4">
            INSTAGRAM
          </h2>
          <p className="text-3xl md:text-4xl font-light">インスタグラム</p>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {instagramPosts.map((post) => (
            <div key={post.id} className="aspect-square bg-gray-200 overflow-hidden group cursor-pointer">
              <div className="w-full h-full bg-gray-300 group-hover:opacity-80 transition-opacity">
                {/* Image placeholder */}
                <div className="flex items-center justify-center h-full text-gray-500 text-sm">
                  IG
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a 
            href="https://www.instagram.com/codestyle.fukuoka/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            view more
          </a>
        </div>
      </div>
    </section>
  )
}

export default InstagramSection