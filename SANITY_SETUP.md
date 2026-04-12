# Sanity CMS Setup Guide

This portfolio integrates with Sanity.io for blog content management. Follow these steps to get started.

## 1. Create a Sanity Project

1. Go to [sanity.io](https://www.sanity.io) and create a new account or login
2. Create a new project (you can use the default configuration)
3. Note your **Project ID** and **Dataset** name (default is "production")

## 2. Set Environment Variables

Create a `.env.local` file in the root of your project:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

Replace `your_project_id_here` with your actual Sanity project ID.

## 3. Create Sanity Schemas

In your Sanity Studio (accessible at `https://sanity.io/manage`), you'll need to create the following schemas:

### Post Schema
```typescript
{
  name: 'post',
  type: 'document',
  title: 'Blog Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      rows: 3,
    },
    {
      name: 'mainImage',
      type: 'image',
      title: 'Main Image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'body',
      type: 'blockContent',
      title: 'Body',
    },
    {
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{ type: 'author' }],
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
      validation: (Rule) => Rule.required(),
    },
  ],
}
```

### Author Schema
```typescript
{
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'bio',
      type: 'text',
      title: 'Bio',
      rows: 3,
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    },
  ],
}
```

### Category Schema
```typescript
{
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    },
  ],
}
```

### Block Content (Rich Text)
```typescript
{
  name: 'blockContent',
  type: 'array',
  title: 'Block Content',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
        ],
        annotations: [
          {
            name: 'link',
            type: 'object',
            title: 'URL',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
              },
              {
                name: 'blank',
                type: 'boolean',
                title: 'Open in new tab?',
              },
            ],
          },
        ],
      },
    },
    {
      type: 'image',
      options: { hotspot: true },
    },
  ],
}
```

## 4. Install Dependencies

The project uses `next-sanity` and `@portabletext/react` for Sanity integration. These should already be included, but if not:

```bash
pnpm add next-sanity @portabletext/react
```

## 5. Test the Integration

1. Start your development server: `pnpm dev`
2. Create a test blog post in Sanity Studio
3. Navigate to `/blog` to see your posts

## 6. API Tokens (Optional)

If you need to write data or require authentication, you'll need to generate API tokens in your Sanity project settings under **API > Tokens**.

## Troubleshooting

- **No posts showing?** Check that your environment variables are set correctly
- **Images not loading?** Ensure your Sanity project has image assets configured
- **Build errors?** Make sure all dependencies are installed with `pnpm install`

For more information, visit the [Next.js + Sanity guide](https://www.sanity.io/guides/sanity-next-js-guide).
