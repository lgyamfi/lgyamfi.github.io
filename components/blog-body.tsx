'use client'

import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { getImageUrl } from '@/lib/image-url'

interface BlogBodyProps {
  body: any
}

const components = {
  types: {
    image: ({ value }: any) => {
      const imageUrl = getImageUrl(value)
      return (
        <figure className="my-8">
          <Image
            src={imageUrl}
            alt={value.alt || 'Blog image'}
            width={800}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        </figure>
      )
    },
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-bold text-foreground mt-6 mb-3">{children}</h3>
    ),
    normal: ({ children }: any) => (
      <p className="prose-text text-foreground mb-4">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-2 mb-4">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-2 mb-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li className="prose-text">{children}</li>,
    number: ({ children }: any) => <li className="prose-text">{children}</li>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-bold">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    code: ({ children }: any) => (
      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground">
        {children}
      </code>
    ),
    link: ({ value, children }: any) => (
      <a
        href={value.href}
        className="text-accent hover:opacity-80 transition-opacity underline"
        target={value.blank ? '_blank' : undefined}
        rel={value.blank ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
  },
}

export function BlogBody({ body }: BlogBodyProps) {
  return (
    <div className="prose-text max-w-none">
      <PortableText value={body} components={components} />
    </div>
  )
}
