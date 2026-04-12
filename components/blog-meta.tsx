'use client'

import Image from 'next/image'
import { getImageUrl } from '@/lib/image-url'

interface BlogMetaProps {
  title: string
  publishedAt: string
  author?: {
    name: string
    image?: any
    bio?: string
  }
  categories?: Array<{
    title: string
    slug: string
  }>
  mainImage?: any
}

export function BlogMeta({
  title,
  publishedAt,
  author,
  categories,
  mainImage,
}: BlogMetaProps) {
  const date = new Date(publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const authorImageUrl = author?.image ? getImageUrl(author.image) : null

  return (
    <article>
      <header className="mb-8">
        <h1 className="font-mono text-4xl font-bold text-foreground mb-4">
          {title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm font-mono text-muted-foreground">
          <time dateTime={publishedAt}>{date}</time>
          {author && <span>by {author.name}</span>}
        </div>

        {categories && categories.length > 0 && (
          <div className="flex gap-2 mb-6 flex-wrap">
            {categories.map((cat) => (
              <span
                key={cat.slug}
                className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded"
              >
                {cat.title}
              </span>
            ))}
          </div>
        )}
      </header>

      {mainImage && (
        <figure className="mb-8 -mx-6 md:mx-0">
          <Image
            src={getImageUrl(mainImage)}
            alt={title}
            width={800}
            height={400}
            className="w-full h-auto rounded-lg"
            priority
          />
        </figure>
      )}

      {author && (
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex gap-4">
            {authorImageUrl && (
              <Image
                src={authorImageUrl}
                alt={author.name}
                width={64}
                height={64}
                className="w-16 h-16 rounded-full object-cover"
              />
            )}
            <div>
              <p className="font-mono font-bold text-foreground mb-1">
                {author.name}
              </p>
              {author.bio && (
                <p className="prose-text text-muted-foreground text-sm">
                  {author.bio}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </article>
  )
}
