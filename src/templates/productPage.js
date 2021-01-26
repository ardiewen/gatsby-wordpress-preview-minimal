import React from "react"
import { graphql } from "gatsby"

export default function ProductPage({ data }) {
  console.log(data)

  return <main>{JSON.stringify(data, null, 2)}</main>
}

export const query = graphql`
  query GET_PRODUCT_DATA($id: String!, $productId: String!) {
    wpProductPage(id: { eq: $id }) {
      __typename
      id
      slug
      uri
      title
      content
    }
    wpProduct(id: { eq: $productId }) {
      __typename
      id
      slug
      name
      description
      ... on WpSimpleProduct {
        uri
      }
    }
  }
`
