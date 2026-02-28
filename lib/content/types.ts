export interface PostFrontmatter {
  crosspost?: {
    devto_id?: number | null
    hashnode_id?: string | null
    medium_url?: string | null
    substack?: boolean
  }
  description: string
  published: boolean
  canonical: string
  tags: string[]
  title: string
  slug: string
  date: string
}

export interface Post {
  frontmatter: PostFrontmatter
  readingTime: number
  content: string
  slug: string
}
