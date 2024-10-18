export default function Contact() {
    return (
      <section id="cta" className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Elevate Your Style with our Footwear?</h2>
          <p className="text-xl mb-8">Join our community and get 10% off your first purchase!</p>
          <form className="max-w-md mx-auto">
            <div className="flex flex-col md:flex-row gap-5">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <button
                type="submit"
                className="bg-white text-purple-500 font-bold py-3 px-7 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    )
  }