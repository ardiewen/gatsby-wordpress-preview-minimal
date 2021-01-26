import type { CreatePagesArgs } from "gatsby"
import { resolve } from "path"

const caseStudyTemplate = resolve("./src/templates/caseStudy.tsx")

interface Data {
  allWpCaseStudy: {
    nodes: Array<{ id: string; uri: string; title: string }>
    totalCount: number
  }
}

export async function createWpCaseStudies({
  graphql,
  actions,
  reporter,
}: CreatePagesArgs): Promise<void> {
  const { data, errors } = await graphql<Data>(`
    query GET_ALL_CASE_STUDIES {
      allWpCaseStudy {
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
    data.allWpCaseStudy.nodes.map(caseStudy => {
      actions.createPage({
        path: caseStudy.uri,
        component: caseStudyTemplate,
        context: {
          id: caseStudy.id,
        },
      })
      reporter.info(
        `Case Study (CPT) created: ${caseStudy.title} at ${caseStudy.uri}`
      )
    })
    reporter.info(`TOTAL POSTS CREATED: ${data.allWpCaseStudy.totalCount}`)
  }
}
