import React from "react"
import { graphql, PageProps } from "gatsby"

interface CaseStudyTemplateProps extends PageProps {
  data: {
    wpCaseStudy: {
      __typename: string
      id: string
      slug: string
      uri: string
      title: string
      content: string
    }
  }
}

export default function CaseStudyTemplate({ data }: CaseStudyTemplateProps) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

export const query = graphql`
  query GET_CASE_STUDY($id: String!) {
    wpCaseStudy(id: { eq: $id }) {
      __typename
      id
      slug
      uri
      title
      content
    }
  }
`
