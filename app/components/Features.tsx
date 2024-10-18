import { Sparkles, Zap, Shield } from 'lucide-react'

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Features</h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="flex flex-col items-center">
              <Sparkles className="text-purple-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Premium Quality</h3>
              <p className="text-gray-600 text-center">My products are designed with the finest materials for lasting quality.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="flex flex-col items-center">
              <Zap className="text-purple-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-center">Get your favorite footwear delivered to your doorstep in no time.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="flex flex-col items-center">
              <Shield className="text-purple-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Secure Shopping</h3>
              <p className="text-gray-600 text-center">Shop with confidence knowing your information is always protected.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}