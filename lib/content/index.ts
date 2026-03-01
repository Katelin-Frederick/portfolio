// Public API for all content. Pages and components should only import from here.
// To migrate to a remote source, swap the implementations below — no UI changes needed.

import type { Post, } from './types'

import { getAllLocalPosts, getLocalPost, } from './local'

const POSTS_PER_PAGE = 10

export const getAllPosts = async (): Promise<Post[]> => getAllLocalPosts()

export const getPaginatedPosts = async (page: number): Promise<{
  posts: Post[]
  totalPages: number
  currentPage: number
}> => {
  const allPosts = await getAllPosts()
  const totalPages = Math.max(1, Math.ceil(allPosts.length / POSTS_PER_PAGE))
  const currentPage = Math.max(1, Math.min(page, totalPages))
  const start = (currentPage - 1) * POSTS_PER_PAGE

  return {
    posts: allPosts.slice(start, start + POSTS_PER_PAGE),
    totalPages,
    currentPage,
  }
}

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  try {
    return getLocalPost(slug)
  } catch {
    return null
  }
}

export type { Post, PostFrontmatter, } from './types'
