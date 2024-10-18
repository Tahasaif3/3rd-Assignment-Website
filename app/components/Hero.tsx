import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-700 mb-5">Welcome to Saifullah Footwear Store</h1>
          <p className="text-xl text-gray-600 mb-8">Elevate your style with our cutting-edge designs and premium quality footwears.</p>
          <button className="bg-purple-600 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 transition-colors">
            Shop Now
          </button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/hero.jpg?height=400&width=600"
            alt="Stylish products showcase"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}