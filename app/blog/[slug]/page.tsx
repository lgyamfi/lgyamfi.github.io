import { getPost, getRelatedPosts, getPosts } from '@/lib/sanity'
import { BlogMeta } from '@/components/blog-meta'
import { BlogBody } from '@/components/blog-body'
import { RelatedPosts } from '@/components/related-posts'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

export const revalidate = 3600

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post: any) => ({
    slug: post.slug.current,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return {
      title: 'Post not found',
      description: 'The blog post you are looking for does not exist',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.mainImage
        ? [
            {
              url: post.mainImage.asset.url,
              width: 1200,
              height: 630,
            },
          ]
        : [],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)
  const relatedPosts = await getRelatedPosts(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link
        href="/blog"
        className="text-accent hover:opacity-80 transition-opacity text-sm font-mono mb-8 inline-block"
      >
        ← back to blog
      </Link>

      <BlogMeta
        title={post.title}
        publishedAt={post.publishedAt}
        author={post.author}
        categories={post.categories}
        mainImage={post.mainImage}
      />

      <div className="mt-12">
        <BlogBody body={post.body} />
      </div>

      {relatedPosts && relatedPosts.length > 0 && (
        <RelatedPosts posts={relatedPosts} />
      )}
    </main>
  )
}
