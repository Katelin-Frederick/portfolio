// Public API for all content. Pages and components should only import from here.
// To migrate to a remote source, swap the implementations below — no UI changes needed.

import type { Post, } from './types'

import { getAllLocalPosts, getLocalPost, } from './local'

export const getAllPosts = async (): Promise<Post[]> => getAllLocalPosts()

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  try {
    return getLocalPost(slug)
  } catch {
    return null
  }
}

export type { Post, PostFrontmatter, } from './types'
