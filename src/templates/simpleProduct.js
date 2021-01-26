import React from "react"
import { graphql } from "gatsby"

export default function SimpleProduct({ data }) {
  console.log(data)

  return <main>{JSON.stringify(data, null, 2)}</main>
}

export const query = graphql`
  query GET_SIMPLE_PRODUCT($id: String!) {
    wpSimpleProduct(id: { eq: $id }) {
      __typename
      id
      slug
      name
      description
      uri
    }
  }
`
