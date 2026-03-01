import type { Metadata, } from 'next'

import { notFound, } from 'next/navigation'
import { ArrowLeft, } from 'lucide-react'
import Link from 'next/link'

import { getPostBySlug, getAllPosts, } from '@/lib/content'
import { MdxContent, } from '@/components/mdx/mdx-content'
import { Badge, } from '@/components/ui/badge'

interface Props {
  params: Promise<{ slug: string }>
}

export const generateStaticParams = async () => {
  const posts = await getAllPosts()
  return posts.map((post) => ({ slug: post.slug, }))
}

export const generateMetadata = async ({ params, }: Props): Promise<Metadata> => {
  const { slug, } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    alternates: { canonical: post.frontmatter.canonical, },
  }
}

const BlogPostPage = async ({ params, }: Props) => {
  const { slug, } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  return (
    <div className='mx-auto max-w-3xl px-6 pb-16 pt-[calc(8vh+2rem)]'>
      <Link
        href='/blog'
        className='mb-8 flex items-center gap-1.5 text-sm text-white/50 transition-colors hover:text-gold-500'
      >
        <ArrowLeft className='size-4' />
        Back to blog
      </Link>

      <header className='mb-10'>
        <h1 className='mb-3 text-3xl font-bold tracking-tight'>
          {post.frontmatter.title}
        </h1>
        <div className='flex items-center gap-3 text-sm text-white/50'>
          <time>
            {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
          <span>·</span>
          <span>{post.readingTime} min read</span>
        </div>
        <div className='mt-3 flex gap-1.5'>
          {post.frontmatter.tags.map((tag) => (
            <Badge key={tag} variant='default' className='text-xs'>
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      <MdxContent source={post.content} />
    </div>
  )
}

export default BlogPostPage
