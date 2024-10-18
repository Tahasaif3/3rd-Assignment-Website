import Image from 'next/image'

const products = [
  { id: 1, name: 'Men\'s Casual Shoes', price: 49.99, image: '/mens-casual-shoes.jpeg' },
  { id: 2, name: 'Women\'s Sneakers', price: 59.99, image: '/women-sneakers.jpeg' },
  { id: 3, name: 'Kids\' School Shoes', price: 39.99, image: '/kids-school-shoes.jpeg' },
  { id: 4, name: 'Men\'s Slippers', price: 19.99, image: '/mens-slippers.jpg' },
  { id: 5, name: 'Women\'s Sandals', price: 29.99, image: '/women-sandals.jpeg' },
  { id: 6, name: 'Leather Formal Shoes', price: 89.99, image: '/leather-formal-shoes.jpeg' },
  { id: 7, name: 'Women\'s Heels', price: 69.99, image: '/women-heels.jpeg' },
  { id: 8, name: 'Men\'s Boots', price: 119.99, image: '/men-boots.jpeg' },
]

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Featured Footwear</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
                <button className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
