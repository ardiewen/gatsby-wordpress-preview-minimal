import React from "react"
import { graphql, PageProps } from "gatsby"

interface PostTemplateProps extends PageProps {
  data: {
    wpPost: {
      __typename: string
      id: string
      slug: string
      uri: string
      title: string
      content: string
    }
  }
}

export default function PostTemplate({ data }: PostTemplateProps) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>
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
