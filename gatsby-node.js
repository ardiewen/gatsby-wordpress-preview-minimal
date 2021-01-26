/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const pageTemplate = require.resolve("./src/templates/page.js")
const postTemplate = require.resolve("./src/templates/post.js")
const productTemplate = require.resolve("./src/templates/product.js")
const simpleProductTemplate = require.resolve(
  "./src/templates/simpleProduct.js"
)
const productPageTemplate = require.resolve("./src/templates/productPage.js")

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

  const {
    data: {
      allWpPost: { nodes: posts },
    },
  } = await graphql(`
    query GET_ALL_POSTS {
      allWpPost {
        nodes {
          id
          uri
          title
        }
      }
    }
  `)

  posts &&
    posts.map(post => {
      actions.createPage({
        path: post.uri,
        component: postTemplate,
        context: {
          id: post.id,
        },
      })
      reporter.info(`Post created: ${post.title} at ${post.uri}`)
    })

  const {
    data: {
      allWpProductPage: { nodes: productPages },
    },
  } = await graphql(`
    query GET_ALL_PRODUCT_PAGES {
      allWpProductPage {
        nodes {
          id
          title
          uri
        }
      }
    }
  `)

  productPages &&
    productPages.map(productPage => {
      actions.createPage({
        path: productPage.uri,
        component: productPageTemplate,
        context: {
          id: productPage.id,
          productId: "cHJvZHVjdDo3Mw==",
        },
      })
    })

  // const {
  //   data: {
  //     allWpProduct: { nodes: products },
  //   },
  // } = await graphql(`
  //   query GET_ALL_PRODUCTS {
  //     allWpProduct {
  //       nodes {
  //         id
  //         name
  //         ... on WpSimpleProduct {
  //           uri
  //         }
  //       }
  //     }
  //   }
  // `)

  // products &&
  //   products.map(product => {
  //     actions.createPage({
  //       path: product.uri,
  //       component: productTemplate,
  //       context: {
  //         id: product.id,
  //       },
  //     })
  //     reporter.info(`Product created: ${product.name} at ${product.uri}`)
  //   })

  // const {
  //   data: {
  //     allWpSimpleProduct: { nodes: simpleProducts },
  //   },
  // } = await graphql(`
  //   query GET_ALL_SIMPLE_PRODUCTS {
  //     allWpSimpleProduct {
  //       nodes {
  //         id
  //         name
  //         uri
  //       }
  //     }
  //   }
  // `)

  // simpleProducts &&
  //   simpleProducts.map(product => {
  //     actions.createPage({
  //       path: product.uri,
  //       component: simpleProductTemplate,
  //       context: {
  //         id: product.id,
  //       },
  //     })
  //     reporter.info(`Simple Product created: ${product.name} at ${product.uri}`)
  //   })
}
