import Hero from './components/Hero'
import Features from './components/Features'
import SocialProof from './components/SocialProof'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import FooterCTA from './components/FooterCTA'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="mx-auto max-w-7xl px-6 lg:px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-emerald-600"></div>
          <span className="text-xl font-extrabold tracking-tight text-gray-900">Lower</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-gray-700">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          <a href="#faq" className="hover:text-gray-900">FAQ</a>
          <a href="#" className="rounded-lg bg-gray-900 px-4 py-2 text-white font-semibold hover:bg-gray-800">Sign in</a>
        </nav>
      </header>

      <main>
        <div id="hero"><Hero /></div>
        <div id="features"><Features /></div>
        <SocialProof />
        <div id="pricing"><Pricing /></div>
        <div id="faq"><FAQ /></div>
        <FooterCTA />
      </main>

      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-gray-500 lg:px-8">
          © {new Date().getFullYear()} Lower, Inc. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
