export default function Reviews() {
    return (
      <section id="testimonials" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">What my Customers Say</h2>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-600 mb-4">"Saifullah Footwear Store has completely transformed my wardrobe. Their clothes are not only stylish but also incredibly comfortable!"</p>
                <p className="font-semibold text-purple-600">- Ayesha Shaikh</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-600 mb-4">"I'm impressed by the quality of Saifullah Footwear Store products. They've become my go-to for all my fashion needs."</p>
                <p className="font-semibold text-purple-600">- Muhammad Hassan</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-600 mb-4">"The customer service at Saifullah Footwear Store is unmatched. They always go above and beyond to ensure customer satisfaction."</p>
                <p className="font-semibold text-purple-600">- Mujeeb Rehman</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }