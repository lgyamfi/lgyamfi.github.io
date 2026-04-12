import { urlFor } from 'next-sanity-image'
import { client } from './sanity'

export function getImageUrl(image: any) {
  if (!image) return null
  return urlFor(image).url()
}

export function getImageBuilder(image: any) {
  if (!image) return null
  return urlFor(image)
}
