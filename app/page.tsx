import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Products from './components/Products'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Features />
        <Products />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}