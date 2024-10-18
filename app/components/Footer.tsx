import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-3xl font-bold mb-3">Saifullah Footwear Store</h3>
            <p className="text-gray-500">Elevating your style with our Footwears since 2010</p>
          </div>
          
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400 transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-purple-400 transition-colors"><Twitter /></a>
              <a href="#" className="hover:text-purple-400 transition-colors"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-7 pt-7 text-center text-gray-500">
          <p>&copy; 2024 Saifullah Footwear Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}