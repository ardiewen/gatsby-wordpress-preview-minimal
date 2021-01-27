import React from "react"
import { graphql, PageProps } from "gatsby"
import { Raw, Button } from "../components/Elements"
import { getLayouts } from "../lib/layout"
import { HeroData } from "../components/Sections"

interface PageTemplateProps extends PageProps {
  data: {
    wpPage: {
      __typename: string
      id: string
      slug: string
      uri: string
      title: string
      isFrontPage: boolean
      content: string
      ACF: {
        layouts: Array<HeroData>
      }
    }
  }
}

export default function PageTemplate({ data }: PageTemplateProps) {
  return (
    <>
      <Button primary>Click Me</Button>
      <Button>Test</Button>
      <Raw>{JSON.stringify(data, null, 2)}</Raw>
      {getLayouts(data.wpPage.ACF.layouts)}
    </>
  )
}

export const query = graphql`
  query GET_PAGE($id: String!) {
    wpPage(id: { eq: $id }) {
      __typename
      id
      slug
      uri
      title
      content
      ACF {
        layouts {
          ...HeroFields
        }
      }
    }
  }
`
