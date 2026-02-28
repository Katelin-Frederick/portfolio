import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'

import type { PostFrontmatter, Post, } from './types'

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts')

const getReadingTime = (content: string): number => {
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / 200)
}

export const getLocalPost = (slug: string): Post => {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content, } = matter(raw)

  return {
    frontmatter: data as PostFrontmatter,
    content,
    slug,
    readingTime: getReadingTime(content),
  }
}

export const getAllLocalPosts = (): Post[] => {
  if (!fs.existsSync(POSTS_DIR)) return []

  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((file) => getLocalPost(file.replace('.mdx', '')))
    .filter((post) => post.frontmatter.published)
    .sort(
      (a, b) => new Date(b.frontmatter.date).getTime()
        - new Date(a.frontmatter.date).getTime()
    )
}
