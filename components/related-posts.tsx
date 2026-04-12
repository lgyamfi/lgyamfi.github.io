'use client'

import { BlogCard } from './blog-card'

interface Post {
  _id: string
  title: string
  excerpt?: string
  slug: {
    current: string
  }
  publishedAt: string
  mainImage?: any
  author?: {
    name: string
  }
  categories?: Array<{
    title: string
    slug: string
  }>
}

interface RelatedPostsProps {
  posts: Post[]
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <section className="mt-16 pt-12 border-t border-border">
      <h2 className="font-mono text-2xl font-bold text-foreground mb-8">
        More articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <BlogCard
            key={post._id}
            title={post.title}
            excerpt={post.excerpt || ''}
            slug={post.slug}
            publishedAt={post.publishedAt}
            mainImage={post.mainImage}
            author={post.author}
            categories={post.categories}
          />
        ))}
      </div>
    </section>
  )
}
