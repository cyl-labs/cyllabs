# SEO Implementation Guide

This document outlines the technical SEO setup for the Cyllabs website. It provides instructions on how to maintain and extend the SEO implementation.

## 1. Per-Page Metadata

To add or update the metadata for a specific page, use the `generateMetadata` function in the `page.tsx` file of the corresponding route.

**Example:**

```tsx
// src/app/about/page.tsx
import { Metadata } from 'next';
import { absoluteUrl } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about Cyllabs and our mission to help Singapore SMEs succeed online.',
  alternates: {
    canonical: absoluteUrl('/about'),
  },
};

export default function AboutPage() {
  // ...
}
```

## 2. JSON-LD Structured Data

The global `Organization` JSON-LD is automatically included in the root layout. To add other types of structured data, such as `Article` or `FAQPage`, use the helper functions in `src/lib/seo.ts`.

**Example:**

```tsx
// src/app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import { jsonLdArticle } from '@/lib/seo';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: absoluteUrl(`/blog/${post.slug}`),
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdArticle({
          headline: post.title,
          author: post.author.name,
          datePublished: post.publishedAt,
          image: absoluteUrl(post.coverImage),
        })}
      />
      {/* ... */}
    </>
  );
}
```

## 3. Sitemaps

The sitemaps are automatically generated after each build using `next-sitemap`. To exclude a page from the sitemap, add its path to the `exclude` array in `next-sitemap.config.js`.

## 4. Regenerating Sitemaps

To manually regenerate the sitemaps, run the following command:

```bash
npm run postbuild
```

## 5. SEO Audit Script

To run the SEO audit script locally, first build the script:

```bash
npm run build:scripts
```

Then, run the compiled script:

```bash
npm run seo:audit -- http://localhost:3000