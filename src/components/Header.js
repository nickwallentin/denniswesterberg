import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import Media from "react-media"
import styled from "styled-components"
import Logo from "../assets/svg/dennis-westerberg-sign.svg"
import { Box, Container, Flex } from "../styles/elements"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}

export default function Header({ overrideColor }) {
  return (
    <StyledHeader className={overrideColor ? "override" : null}>
      <Container>
        <Flex pb={["3", "5"]} pt={["3", "5"]}>
          <LogoBox to="/">
            <Logo />
          </LogoBox>
          <Media
            query="(min-width: 500px)"
            render={() => (
              <Flex
                id="nav"
                as="nav"
                role="navigation"
                aria-label="main navigation"
                alignItems="center"
                ml="4"
                flex="1"
              >
                <Link to="/">Föreläsare</Link>
                <Link to="/">Coach</Link>
                <Link to="/">Böcker</Link>
                <Link to="/">Podcast</Link>
                <Link to="/">Blogg</Link>
              </Flex>
            )}
          />

          <Flex className="actions" alignItems="center">
            <Box mr="4">SV / EN</Box>{" "}
            <Box>
              <ThemeToggler>
                {({ theme, toggleTheme }) => (
                  <div
                    onClick={() =>
                      toggleTheme(theme === "light" ? "dark" : "light")
                    }
                  >
                    {theme}
                  </div>
                )}
              </ThemeToggler>
            </Box>
          </Flex>
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
const StyledHeader = styled(motion.header)`
  background: linear-gradient(0deg, var(--c-bg-alpha) 0%, var(--c-bg) 100%);

  nav {
    a {
      color: var(--c-heading);
      text-transform: uppercase;
      text-decoration: none;
      font-weight: var(--f-weight-heading);
      margin: 0px 15px;
    }
  }
  &.override {
    background: linear-gradient(
      0deg,
      var(--bg-dark-alpha) 0%,
      var(--bg-dark) 100%
    );
    svg {
      text {
        fill: var(--c-heading-dark) !important;
      }
    }

    nav {
      a {
        color: var(--c-heading-dark) !important;
      }
    }

    .actions {
      color: var(--c-heading-dark) !important;
    }
  }
`
