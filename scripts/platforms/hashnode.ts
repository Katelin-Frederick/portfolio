import matter from 'gray-matter'
import fs from 'fs'

import type { ScriptFrontmatter, PublishArgs, } from './devto'

// Strips characters that platforms reject in tag names (e.g. dots in "next.js")
const sanitizeTag = (tag: string): string => tag.toLowerCase().replace(/\./g, '').replace(/[^a-z0-9-]/g, '')

const HASHNODE_GQL = 'https://gql.hashnode.com'

interface HashnodeResponse {
  data?: {
    publishPost?: { post: { id: string; url: string } }
    updatePost?: { post: { id: string; url: string } }
  }
  errors?: Array<{ message: string }>
}

export const publishToHashnode = async ({
  frontmatter,
  content,
  filePath,
  rawFile,
}: PublishArgs) => {
  const token = process.env.HASHNODE_TOKEN
  const publicationId = process.env.HASHNODE_PUBLICATION_ID
  if (!token) throw new Error('HASHNODE_TOKEN environment variable is not set')
  if (!publicationId)
    throw new Error('HASHNODE_PUBLICATION_ID environment variable is not set')

  const existingId = frontmatter.crosspost?.hashnode_id

  if (existingId) {
    await updatePost({
      existingId, frontmatter, content, token,
    })
  } else {
    await createPost({
      publicationId, frontmatter, content, token, filePath, rawFile,
    })
  }
}

const createPost = async ({
  publicationId,
  frontmatter,
  content,
  token,
  filePath,
  rawFile,
}: {
  publicationId: string
  frontmatter: ScriptFrontmatter
  content: string
  token: string
  filePath: string
  rawFile: string
}) => {
  const mutation = `
    mutation PublishPost($input: PublishPostInput!) {
      publishPost(input: $input) {
        post { id url }
      }
    }
  `

  const res = await fetch(HASHNODE_GQL, {
    method: 'POST',
    headers: { Authorization: token, 'Content-Type': 'application/json', },
    body: JSON.stringify({
      query: mutation,
      variables: {
        input: {
          title: frontmatter.title,
          contentMarkdown: content,
          publicationId,
          tags: (frontmatter.tags ?? []).map((t) => ({ slug: sanitizeTag(t), name: t, })),
          originalArticleURL: frontmatter.canonical,
          metaTags: { description: frontmatter.description, },
        },
      },
    }),
  })

  const json = await res.json() as HashnodeResponse
  if (json.errors) throw new Error(`Hashnode error: ${JSON.stringify(json.errors)}`)

  const post = json.data?.publishPost?.post
  if (!post) throw new Error('Hashnode: no post returned from publishPost')

  const { data, content: mdxContent, } = matter(rawFile)
  data.crosspost ??= {}
  ;(data.crosspost as Record<string, unknown>).hashnode_id = post.id
  fs.writeFileSync(filePath, matter.stringify(mdxContent, data))

  console.log(`✓ Hashnode: published — ${post.url}`)
}

const updatePost = async ({
  existingId,
  frontmatter,
  content,
  token,
}: {
  existingId: string
  frontmatter: ScriptFrontmatter
  content: string
  token: string
}) => {
  const mutation = `
    mutation UpdatePost($input: UpdatePostInput!) {
      updatePost(input: $input) {
        post { id url }
      }
    }
  `

  const res = await fetch(HASHNODE_GQL, {
    method: 'POST',
    headers: { Authorization: token, 'Content-Type': 'application/json', },
    body: JSON.stringify({
      query: mutation,
      variables: {
        input: {
          id: existingId,
          title: frontmatter.title,
          contentMarkdown: content,
        },
      },
    }),
  })

  const json = await res.json() as HashnodeResponse
  if (json.errors) throw new Error(`Hashnode error: ${JSON.stringify(json.errors)}`)

  const url = json.data?.updatePost?.post?.url
  console.log(`✓ Hashnode: updated — ${url ?? ''}`)
}
