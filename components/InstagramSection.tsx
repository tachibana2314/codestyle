import React from 'react'
import Image from 'next/image'

const instagramPosts = [
  { id: 1, image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=400&fit=crop' },
  { id: 2, image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=400&fit=crop' },
  { id: 3, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=400&fit=crop' },
  { id: 4, image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=400&h=400&fit=crop' },
  { id: 5, image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=400&fit=crop' },
  { id: 6, image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&h=400&fit=crop' },
  { id: 7, image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=400&fit=crop' },
  { id: 8, image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=400&fit=crop' },
  { id: 9, image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&h=400&fit=crop' },
  { id: 10, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop' },
  { id: 11, image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=400&h=400&fit=crop' },
  { id: 12, image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=400&fit=crop' },
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
            <div key={post.id} className="aspect-square bg-gray-200 overflow-hidden group cursor-pointer relative">
              <Image
                src={post.image}
                alt={`Instagram post ${post.id}`}
                fill
                className="object-cover group-hover:opacity-80 transition-opacity"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a 
            href="https://www.instagram.com/tsumugite_official/" 
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