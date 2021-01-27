import React from "react"
import styled from "styled-components"

const Container = styled.footer`
  background-color: #dedede;
  width: 100%;
`

export default function Footer(): JSX.Element {
  return (
    <Container>
      <h1>Footer</h1>
    </Container>
  )
}
