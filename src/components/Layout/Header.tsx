import React from "react"
import styled from "styled-components"

const Container = styled.header`
  background-color: #dedede;
  width: 100%;
`

export default function Header(): JSX.Element {
  return (
    <Container>
      <h1>Header</h1>
    </Container>
  )
}
