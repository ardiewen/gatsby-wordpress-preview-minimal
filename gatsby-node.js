/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const pageTemplate = require.resolve("./src/templates/page.js")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const {
    data: {
      allWpPage: { nodes: pages },
    },
  } = await graphql(`
    query GET_ALL_PAGES {
      allWpPage {
        nodes {
          id
          uri
          title
        }
      }
    }
  `)

  pages &&
    pages.map(page => {
      actions.createPage({
        path: page.uri,
        component: pageTemplate,
        context: {
          id: page.id,
        },
      })
      reporter.info(`Page created: ${page.title} at ${page.uri}`)
    })
}
