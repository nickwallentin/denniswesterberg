import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "../assets/svg/dennis-westerberg-sign.svg"
import { Box, Container, Flex } from "../styles/elements"

export default function Header(props) {
  return (
    <StyledHeader>
      <Container>
        <Flex
          pb="5"
          pt="5"
          as="nav"
          tole="navigation"
          aria-label="main navigation"
        >
          <LogoBox to="/">
            <Logo />
          </LogoBox>
        </Flex>
      </Container>
    </StyledHeader>
  )
}

const LogoBox = styled(Link)`
  width: 100px;
  svg {
    text {
      fill: var(--i-main);
    }
  }
`
const StyledHeader = styled.header`
  background: linear-gradient(0deg, var(--c-bg-alpha) 0%, var(--c-bg) 100%);
`
