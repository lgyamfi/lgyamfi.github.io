import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on product, engineering, and technology',
}

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <div className="mb-12">
        <Link
          href="/"
          className="text-accent hover:opacity-80 transition-opacity text-sm font-mono mb-6 inline-block"
        >
          ← back
        </Link>
        <h1 className="font-mono text-3xl font-bold text-foreground mb-2">
          Blog
        </h1>
        <p className="prose-text text-muted-foreground">
          Coming soon — thoughts on product, engineering, and technology
        </p>
      </div>
    </main>
  )
}