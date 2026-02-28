/*****
 * Cross-posting CLI
 *
 * Usage:
 *   npm run publish-post -- --slug my-post
 *   npm run publish-post -- --slug my-post --platforms devto,hashnode
 *
 * Supported platforms: devto, hashnode
 *****/

import { parseArgs, } from 'node:util'
import matter from 'gray-matter'
import path from 'path'
import fs from 'fs'

import type { ScriptFrontmatter, } from './platforms/devto'

import { publishToHashnode, } from './platforms/hashnode'
import { publishToDevTo, } from './platforms/devto'

// Load .env.local manually (no dotenv dependency needed with this approach)
const envPath = path.join(process.cwd(), '.env.local')
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf-8').split('\n')) {
    const match = /^([^#=]+)=(.*)$/.exec(line)
    if (match) process.env[match[1].trim()] = match[2].trim().replace(/^["']|["']$/g, '')
  }
}

const { values, } = parseArgs({
  options: {
    slug: { type: 'string', },
    platforms: { type: 'string', default: 'devto,hashnode', },
  },
})

const main = async () => {
  const { slug, platforms, } = values
  if (!slug) {
    console.error('Error: --slug is required')
    console.error('Example: npm run publish-post -- --slug my-post')
    process.exit(1)
  }

  const filePath = path.join(process.cwd(), 'content', 'posts', `${slug}.mdx`)
  if (!fs.existsSync(filePath)) {
    console.error(`Error: No post found at content/posts/${slug}.mdx`)
    process.exit(1)
  }

  const rawFile = fs.readFileSync(filePath, 'utf-8')
  const { data, content, } = matter(rawFile)
  const frontmatter = data as ScriptFrontmatter

  if (!frontmatter.published) {
    console.error('Error: Post is not marked as published in frontmatter')
    process.exit(1)
  }

  const platformList = (platforms ?? 'devto,hashnode').split(',').map((s) => s.trim())
  console.log(`Publishing "${frontmatter.title}" to: ${platformList.join(', ')}\n`)

  for (const platform of platformList) {
    try {
      switch (platform) {
        case 'devto':
          await publishToDevTo({
            slug, frontmatter, content, filePath, rawFile,
          })
          break
        case 'hashnode':
          await publishToHashnode({
            slug, frontmatter, content, filePath, rawFile,
          })
          break
        case 'medium':
          console.log(
            '⚠  Medium: Their API only creates drafts and is largely deprecated.\n'
            + '   Use the Medium import tool instead: https://medium.com/p/import'
          )
          break
        case 'substack':
          console.log(
            '⚠  Substack: No public API available.\n'
            + '   Post manually and set canonical URL to: '
            + frontmatter.canonical
          )
          break
        default:
          console.warn(`Unknown platform: ${platform}`)
      }
    } catch (err) {
      console.error(`✗ ${platform}: ${(err as Error).message}`)
    }
  }
}

void main()
