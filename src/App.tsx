import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
export function App() {
  return (
    <div className="min-h-screen w-full bg-[#000] text-white selection:bg-cyan-500/30">
      <div className="min-h-screen w-full bg-gradient-to-b from-[#05060a] via-black to-[#05060a]">
        <Navbar />
        <main>
          <Hero />
        </main>
      </div>
    </div>
  )
}
