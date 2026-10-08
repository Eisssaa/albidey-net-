import { useEffect, useState, type ReactNode } from 'react'

export const routes = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'news', label: 'News' },
  { id: 'references', label: 'References' },
  { id: 'contact', label: 'Contact' },
] as const

export type RouteId = (typeof routes)[number]['id']

const parse = (): RouteId => {
  const id = window.location.hash.replace(/^#\/?/, '') as RouteId
  return routes.some((r) => r.id === id) ? id : 'home'
}

export function useRoute(): RouteId {
  const [route, setRoute] = useState<RouteId>(parse)
  useEffect(() => {
    const onChange = () => {
      setRoute(parse())
      window.scrollTo({ top: 0 })
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return route
}

export const href = (id: RouteId) => `#${id}`

export function Link({
  to,
  className,
  children,
}: {
  to: RouteId
  className?: string
  children: ReactNode
}) {
  return (
    <a href={href(to)} className={className}>
      {children}
    </a>
  )
}
