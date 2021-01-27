import type { CreatePagesArgs } from "gatsby"
import { resolve } from "path"

const postTemplate = resolve("./src/templates/post.tsx")

interface Data {
  allWpPost: {
    nodes: Array<{ id: string; uri: string; title: string }>
    totalCount: number
  }
}

export async function createWpPosts({
  graphql,
  actions,
  reporter,
}: CreatePagesArgs): Promise<void> {
  const { data, errors } = await graphql<Data>(`
    query GET_ALL_POSTS {
      allWpPost {
        nodes {
          id
          uri
          title
        }
        totalCount
      }
    }
  `)

  if (data) {
    data.allWpPost.nodes.map(post => {
      actions.createPage({
        path: post.uri,
        component: postTemplate,
        context: {
          id: post.id,
        },
      })
      reporter.info(`Post created: ${post.title} at ${post.uri}`)
    })
    reporter.info(`TOTAL POSTS CREATED: ${data.allWpPost.totalCount}`)
  }
}
