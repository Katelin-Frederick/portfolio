import type { Metadata, } from 'next'

import Link from 'next/link'

import { Badge, } from '@/components/ui/badge'
import { getAllPosts, } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on full-stack development, tooling, and side projects.',
}

const BlogPage = async () => {
  const posts = await getAllPosts()

  return (
    <div className='mx-auto max-w-3xl px-6 py-16'>
      <h1 className='mb-2 text-3xl font-bold tracking-tight'>Blog</h1>
      <p className='mb-12 text-muted-foreground'>
        {posts.length} post{posts.length !== 1 ? 's' : ''} on full-stack
        development, tooling, and side projects.
      </p>

      <ul className='space-y-10'>
        {posts.map((post) => (
          <li key={post.slug} className='border-b border-border pb-10 last:border-0 last:pb-0'>
            <Link href={`/blog/${post.slug}`} className='group'>
              <div className='mb-2 flex items-start justify-between gap-4'>
                <h2 className='text-xl font-semibold group-hover:underline'>
                  {post.frontmatter.title}
                </h2>
                <time className='whitespace-nowrap pt-1 text-sm text-muted-foreground'>
                  {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
              </div>
              <p className='mb-3 text-muted-foreground'>
                {post.frontmatter.description}
              </p>
              <div className='flex items-center gap-2'>
                <span className='text-xs text-muted-foreground'>
                  {post.readingTime} min read
                </span>
                <span className='text-muted-foreground'>·</span>
                <div className='flex gap-1.5'>
                  {post.frontmatter.tags.map((tag) => (
                    <Badge key={tag} variant='default' className='text-xs'>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogPage
