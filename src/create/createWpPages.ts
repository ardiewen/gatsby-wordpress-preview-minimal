import type { CreatePagesArgs } from "gatsby"
import { resolve } from "path"

const pageTemplate = resolve("./src/templates/page.tsx")

interface Page {
  node: {
    id: string
    uri: string
    title: string
  }
}

interface Data {
  allWpPage: {
    edges: Array<Page>
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
        edges {
          node {
            id
            uri
            title
          }
        }
        totalCount
      }
    }
  `)

  if (data) {
    data.allWpPage.edges.map(({ node }) => {
      actions.createPage({
        path: node.uri,
        component: pageTemplate,
        context: {
          id: node.id,
        },
      })
      reporter.info(`Page created: ${node.title} at ${node.uri}`)
    })
    reporter.info(`TOTAL PAGES CREATED: ${data.allWpPage.totalCount}`)
  }
}
