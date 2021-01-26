import React from "react"
import { graphql } from "gatsby"

export default function Product({ data }) {
  console.log(data)

  return <main>{JSON.stringify(data, null, 2)}</main>
}

export const query = graphql`
  query GET_PRODUCT($id: String!) {
    wpProduct(id: { eq: $id }) {
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
