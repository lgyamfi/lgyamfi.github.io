'use client'

import Link from 'next/link'
import Image from 'next/image'
import { getImageUrl } from '@/lib/image-url'

interface BlogCardProps {
  title: string
  excerpt: string
  slug: string
  publishedAt: string
  mainImage?: any
  author?: {
    name: string
    image?: any
  }
  categories?: Array<{
    title: string
    slug: string
  }>
}

export function BlogCard({
  title,
  excerpt,
  slug,
  publishedAt,
  mainImage,
  author,
  categories,
}: BlogCardProps) {
  const date = new Date(publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  const imageUrl = getImageUrl(mainImage)

  return (
    <Link href={`/blog/${slug.current || slug}`}>
      <article className="group cursor-pointer border border-border rounded-lg overflow-hidden hover:border-accent transition-colors h-full flex flex-col">
        {imageUrl && (
          <div className="relative aspect-video overflow-hidden bg-muted">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        <div className="p-6 flex flex-col flex-1">
          <div className="mb-3">
            {categories && categories.length > 0 && (
              <div className="flex gap-2 mb-3 flex-wrap">
                {categories.slice(0, 2).map((cat) => (
                  <span
                    key={cat.slug}
                    className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded"
                  >
                    {cat.title}
                  </span>
                ))}
              </div>
            )}
            <h3 className="font-mono font-bold text-lg text-foreground group-hover:text-accent transition-colors line-clamp-2">
              {title}
            </h3>
          </div>

          <p className="prose-text text-muted-foreground mb-4 flex-1 line-clamp-2">
            {excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-border text-xs font-mono text-muted-foreground">
            <span>{date}</span>
            {author && <span>{author.name}</span>}
          </div>
        </div>
      </article>
    </Link>
  )
}
