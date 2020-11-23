import React from "react"
import { graphql } from "gatsby"

export default function Page({ data }) {
  console.log(data)

  return <main>{JSON.stringify(data, null, 2)}</main>
}

export const query = graphql`
  query GET_PAGE($id: String!) {
    wpPage(id: { eq: $id }) {
      __typename
      id
      slug
      uri
      title
      isFrontPage
      content
    }
  }
`
