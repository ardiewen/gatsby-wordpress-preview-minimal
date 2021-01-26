import type { CreatePagesArgs } from "gatsby"
import { resolve } from "path"

const pageTemplate = resolve("./src/templates/page.tsx")

interface Data {
  allWpPage: {
    nodes: Array<{
      id: string
      uri: string
      title: string
    }>
    totalCount: number
  }
}

export async function createWpPages({
  graphql,
  actions,
  reporter,
}: CreatePagesArgs): Promise<void> {
  const { data, errors } = await graphql<Data>(`
    query GET_ALL_PAGES {
      allWpPage {
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
    data.allWpPage.nodes.map(page => {
      actions.createPage({
        path: page.uri,
        component: pageTemplate,
        context: {
          id: page.id,
        },
      })
      reporter.info(`Page created: ${page.title} at ${page.uri}`)
    })
    reporter.info(`TOTAL PAGES CREATED: ${data.allWpPage.totalCount}`)
  }
}
