'use client'

import Link from 'next/link'

export function BlogLink() {
  return (
    <section className="mt-4 pt-3 border-t border-border">
      <h2 className="section-title mb-6">Latest from the blog:</h2>
      <div className="prose-text">
        <Link
          href="/devtalk"
          className="text-accent hover:opacity-80 transition-opacity inline-flex items-center gap-2"
        >
          explore articles
          <span className="font-mono">→</span>
        </Link>
      </div>
    </section>
  )
}
