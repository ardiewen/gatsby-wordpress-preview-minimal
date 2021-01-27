import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

const Section = styled.section<{ background: string }>`
  background-color: ${({ background }) => background || "#fefefe"};
  padding: 10% 25%;
`

const Headline = styled.h2`
  margin: 0;
  text-transform: uppercase;
`

const Description = styled.p`
  margin: 0;
`

export interface HeroData {
  __typename: string
  background: string
  headline: string
  description: string
}

export default function Hero({ data }: { data: HeroData }): JSX.Element {
  return (
    <Section background={data.background}>
      <Headline>{data.headline}</Headline>
      <Description>{data.description}</Description>
    </Section>
  )
}

export const fragment = graphql`
  fragment HeroFields on WpPage_Acf_Layouts_Hero {
    __typename
    background
    headline
    description
  }
`
