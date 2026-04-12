'use client'

import { BlogCard } from './blog-card'

interface Post {
  _id: string
  title: string
  excerpt: string
  slug: {
    current: string
  }
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

interface BlogGridProps {
  posts: Post[]
  loading?: boolean
}

export function BlogGrid({ posts, loading }: BlogGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="h-96 bg-muted rounded-lg animate-pulse"
          />
        ))}
      </div>
    )
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="prose-text text-muted-foreground">
          No posts yet. Check back soon!
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogCard key={post._id} {...post} />
      ))}
    </div>
  )
}
