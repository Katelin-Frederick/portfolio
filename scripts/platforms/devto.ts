import matter from 'gray-matter'
import fs from 'fs'

export interface ScriptFrontmatter {
  crosspost?: {
    devto_id?: number
    hashnode_id?: string
  }
  description?: string
  published?: boolean
  canonical?: string
  tags?: string[]
  title: string
}

export interface PublishArgs {
  frontmatter: ScriptFrontmatter
  filePath: string
  content: string
  rawFile: string
  slug: string
}

export const publishToDevTo = async ({
  frontmatter, content, filePath, rawFile,
}: PublishArgs) => {
  const apiKey = process.env.DEVTO_API_KEY
  if (!apiKey) throw new Error('DEVTO_API_KEY environment variable is not set')

  const existingId = frontmatter.crosspost?.devto_id
  const method = existingId ? 'PUT' : 'POST'
  const url = existingId
    ? `https://dev.to/api/articles/${existingId}`
    : 'https://dev.to/api/articles'

  const res = await fetch(url, {
    method,
    headers: {
      'api-key': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      article: {
        title: frontmatter.title,
        body_markdown: content,
        published: frontmatter.published ?? true,
        tags: (frontmatter.tags ?? []).map(sanitizeTag).slice(0, 4), // Dev.to max 4 tags
        canonical_url: frontmatter.canonical,
        description: frontmatter.description,
      },
    }),
  })

  if (!res.ok) {
    const err = await res.text()
    throw new Error(`Dev.to API error (${res.status}): ${err}`)
  }

  const data = (await res.json()) as { id: number; url: string }

  if (!existingId) {
    updateCrosspostId(filePath, rawFile, 'devto_id', data.id)
  }

  console.log(`✓ Dev.to: ${existingId ? 'updated' : 'published'} — ${data.url}`)
}

// Strips characters that platforms reject in tag names (e.g. dots in "next.js")
const sanitizeTag = (tag: string): string => tag.toLowerCase().replace(/\./g, '').replace(/[^a-z0-9-]/g, '')

const updateCrosspostId = (
  filePath: string,
  raw: string,
  key: string,
  value: unknown
) => {
  const { data, content, } = matter(raw)
  data.crosspost ??= {}
  ;(data.crosspost as Record<string, unknown>)[key] = value
  fs.writeFileSync(filePath, matter.stringify(content, data))
}
