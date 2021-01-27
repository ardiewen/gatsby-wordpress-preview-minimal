import React from "react"
import styled from "styled-components"
import NormalizeStyles from "../../styles/NormalizeStyles"
import GlobalStyles from "../../styles/GlobalStyles"
import { Header, Footer } from "."

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Content = styled.div`
  flex-grow: 1;
  overflow-x: hidden;
`

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props): JSX.Element {
  return (
    <>
      <NormalizeStyles />
      <GlobalStyles />
      <Container>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </Container>
    </>
  )
}
