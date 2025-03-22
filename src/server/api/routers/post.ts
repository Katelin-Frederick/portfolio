import { z, } from 'zod'

import { createTRPCRouter, publicProcedure, } from '~/server/api/trpc'

// Mocked DB
interface Post {
  name: string;
  id: number;
}
const posts: Post[] = [
  {
    id: 1,
    name: 'Hello World',
  }
]

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string(), }))
    .query(({ input, }) => ({greeting: `Hello ${input.text}`,})),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1), }))
    .mutation(async ({ input, }) => {
      const post: Post = {
        id: posts.length + 1,
        name: input.name,
      }
      posts.push(post)
      return post
    }),

  getLatest: publicProcedure.query(() => posts.at(-1) ?? null),
})
