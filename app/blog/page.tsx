import type { Metadata, } from 'next'

import Link from 'next/link'

import {
  PaginationPrevious,
  PaginationContent,
  PaginationNext,
  PaginationLink,
  PaginationItem,
  Pagination,
} from '@/components/ui/pagination'
import { getPaginatedPosts, } from '@/lib/content'
import { Badge, } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on full-stack development, tooling, and side projects.',
}

interface Props {
  searchParams: Promise<{ page?: string }>
}

const BlogPage = async ({ searchParams, }: Props) => {
  const { page, } = await searchParams
  const currentPage = Math.max(1, parseInt(page ?? '1', 10))
  const { posts, totalPages, } = await getPaginatedPosts(currentPage)

  return (
    <div className='mx-auto max-w-3xl px-6 pb-16 pt-[calc(8vh+2rem)]'>
      <h1 className='mb-8 text-3xl font-bold tracking-tight'>Blog</h1>

      {posts.length === 0 && (
        <div className='flex flex-col items-center justify-center py-24 text-center'>
          <p className='font-mono text-white/50'>{'// TODO: write blog posts'}</p>
          <p className='mt-4 text-sm'>Posts are on the way — check back soon.</p>
        </div>
      )}

      <ul className='space-y-10'>
        {posts.map((post) => (
          <li key={post.slug} className='border-b border-white/10 pb-10 last:border-0 last:pb-0'>
            <Link href={`/blog/${post.slug}`} className='group'>
              <h2 className='text-xl font-semibold transition-colors group-hover:text-gold-500'>
                {post.frontmatter.title}
              </h2>
              <time className='whitespace-nowrap pt-1 text-sm text-white/50'>
                {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
              <p className='mb-3 mt-2 text-white/70'>
                {post.frontmatter.description}
              </p>
              <div className='flex items-center gap-2'>
                <span className='text-xs text-white/50'>
                  {post.readingTime} min read
                </span>
                <span className='text-white/50'>·</span>
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

      {totalPages > 1 && (
        <Pagination className='mt-12'>
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious href={`/blog?page=${currentPage - 1}`} />
              </PaginationItem>
            )}

            {Array.from({ length: totalPages, }, (_, i) => i + 1).map((pageNum) => (
              <PaginationItem key={pageNum}>
                <PaginationLink
                  href={`/blog?page=${pageNum}`}
                  isActive={pageNum === currentPage}
                >
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
            ))}

            {currentPage < totalPages && (
              <PaginationItem>
                <PaginationNext href={`/blog?page=${currentPage + 1}`} />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      )}
    </div>
  )
}

export default BlogPage
