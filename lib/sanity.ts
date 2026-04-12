import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'YOUR_PROJECT_ID'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})

export async function getPosts() {
  const posts = await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      author->{
        name,
        slug,
        image
      },
      categories[]->{
        title,
        slug
      },
      mainImage,
    }
  `)
  return posts
}

export async function getPost(slug: string) {
  const post = await client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      body,
      excerpt,
      publishedAt,
      author->{
        name,
        slug,
        image,
        bio
      },
      categories[]->{
        title,
        slug
      },
      mainImage,
    }
  `,
    { slug }
  )
  return post
}

export async function getRelatedPosts(slug: string) {
  const posts = await client.fetch(
    `
    *[_type == "post" && slug.current != $slug] | order(publishedAt desc) [0...3] {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      mainImage,
    }
  `,
    { slug }
  )
  return posts
}
