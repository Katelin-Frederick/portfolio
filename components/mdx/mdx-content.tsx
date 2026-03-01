import type { Plugin, } from 'unified'

import rehypePrettyCode from 'rehype-pretty-code'
import { MDXRemote, } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'

export const MdxContent = ({ source, }: { source: string }) => (
  <div className='prose prose-neutral max-w-none prose-invert'>
    <MDXRemote
      source={source}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            [rehypePrettyCode as unknown as Plugin, { theme: 'github-dark', }]
          ],
        },
      }}
    />
  </div>
)
