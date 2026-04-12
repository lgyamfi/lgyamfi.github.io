'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-5xl px-50 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-mono font-bold text-foreground hover:text-accent transition-colors"
        >
          🥷🏾
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className={`font-mono text-sm transition-colors ${pathname === '/'
              ? 'text-foreground'
              : 'text-muted-foreground hover:text-foreground'
              }`}
          >
            home
          </Link>
          <Link
            href="/devtalk"
            className={`font-mono text-sm transition-colors ${pathname.startsWith('/devtalk')
              ? 'text-foreground'
              : 'text-muted-foreground hover:text-foreground'
              }`}
          >
            devtalk
          </Link>
        </div>
      </div>
    </nav>
  )
}
