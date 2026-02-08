import React from 'react'

const ConceptSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-sm md:text-base tracking-widest text-gray-600 mb-4">
            CONCEPT
          </h2>
          <p className="text-3xl md:text-4xl font-light">コンセプト</p>
        </div>
        
        <div className="text-center space-y-6 text-gray-700 leading-relaxed">
          <p>
            旅をする、映画を観る、音楽を聴く、<br />
            本を読む、服を選ぶ、家具と暮らす。
          </p>
          
          <p>
            日々の暮らしをより深く味わい、<br />
            「楽しむこと」を忘れない。
          </p>
          
          <p>
            そんな空間を提供したいと<br />
            私たちは考えています。
          </p>
          
          <p className="pt-4">
            時代を超える普遍性を持つ<br />
            トラディショナルなデザインをベースに、<br />
            暮らす人の趣味や<br />
            ライフスタイルにマッチした家を、<br />
            流行にとらわれすぎない<br />
            愛されるお店を、<br />
            造り上げていくことが
          </p>
          
          <p className="text-lg font-medium pt-4">
            CODE STYLEの仕事です。
          </p>
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-gray-900 text-sm tracking-wider hover:bg-gray-900 hover:text-white transition-colors">
            ABOUT
          </button>
        </div>
      </div>
    </section>
  )
}

export default ConceptSection