import React from "react"
import styled from "styled-components"

const Container = styled.section`
  background-color: #fdfdfd;
  border: 1px solid #4d4d4d;
  border-radius: 5px;
  box-sizing: border-box;
  margin: 20px;
  padding: 20px;
`

interface Props {
  children: React.ReactNode
}

export default function Raw({ children }: Props): JSX.Element {
  return (
    <Container>
      <h2>Raw Data</h2>
      <pre>{children}</pre>
    </Container>
  )
}
