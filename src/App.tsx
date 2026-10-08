import { useRoute } from './lib/router'
import { Halo } from './components/Halo'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Solutions } from './pages/Solutions'
import { News } from './pages/News'
import { References } from './pages/References'
import { Contact } from './pages/Contact'

const pages = { home: Home, about: About, solutions: Solutions, news: News, references: References, contact: Contact }

export function App() {
  const route = useRoute()
  const Page = pages[route]
  return (
    <div className="relative flex min-h-screen flex-col">
      <Halo variant={route} />
      <div className="relative z-10 flex flex-1 flex-col">
        <Navbar active={route} />
        <main key={route} className="flex-1">
          <Page />
        </main>
        <Footer />
      </div>
    </div>
  )
}
