import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-light mb-4">CODE STYLE</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              トラディショナルなデザインをベースに、<br />
              暮らす人のライフスタイルにマッチした空間を。
            </p>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-sm tracking-wider mb-4">MENU</h3>
            <nav className="space-y-2">
              <a href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">ABOUT</a>
              <a href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">WORKS</a>
              <a href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">SERVICE</a>
              <a href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">BLOG</a>
              <a href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">CONTACT</a>
            </nav>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="text-sm tracking-wider mb-4">FOLLOW</h3>
            <div className="space-y-2">
              <a 
                href="https://www.instagram.com/codestyle.fukuoka/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-sm text-gray-400 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a 
                href="https://www.youtube.com/@CODESTYLE" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-sm text-gray-400 hover:text-white transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-xs text-gray-400">
            © 2026 CODE STYLE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer