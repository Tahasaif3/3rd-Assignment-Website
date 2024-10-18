import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-pink-600 to-indigo-600 text-white">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link href="/">Saifullah Footwear Store</Link>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="#features" className="hover:text-gray-200 transition-colors">Features</Link>
            <Link href="#testimonials" className="hover:text-gray-200 transition-colors">Reviews</Link>
            <Link href="#cta" className="hover:text-gray-200 transition-colors">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}