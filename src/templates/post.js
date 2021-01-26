import React from "react"
import { graphql } from "gatsby"

export default function Post({ data }) {
  console.log(data)

  return <main>{JSON.stringify(data, null, 2)}</main>
}

export const query = graphql`
  query GET_POST($id: String!) {
    wpPost(id: { eq: $id }) {
      __typename
      id
      slug
      uri
      title
      content
    }
  }
`