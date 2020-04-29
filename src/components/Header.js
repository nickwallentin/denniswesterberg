import React, { useState, Fragment } from "react"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import Media from "react-media"
import styled from "styled-components"
import Logo from "../assets/svg/dennis-westerberg-sign.svg"
import { Box, Container, Flex } from "../styles/elements"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

import MenuIcon from "../assets/svg/menu.svg"
import CloseIcon from "../assets/svg/close.svg"
import DarkIcon from "../assets/svg/dark-mode.svg"
import LightIcon from "../assets/svg/light-mode.svg"

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}

const menuIcon = {
  exit: { rotate: 360 },
  closed: { rotate: 0 },
  open: {
    rotate: 360,
  },
}

const container = {
  initial: {
    opacity: 0,
    transition: {
      staggerDirection: -1,
      staggerChildren: 0.1,
      when: "afterChildren",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
}

const item = {
  initial: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
}

const navLinks = [
  { name: "Föreläsare", to: "/" },
  { name: "Coach", to: "/" },
  { name: "Böcker", to: "/" },
  { name: "Podcast", to: "/" },
  { name: "Blogg", to: "/" },
]

export default function Header({ overrideColor }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <Fragment>
      <Compensator menuOpen={menuOpen} />
      <StyledHeader
        menuOpen={menuOpen}
        className={overrideColor ? "override" : null}
      >
        <Container>
          <Flex pb={["3", "4", "5"]} pt={["3", "4", "5"]}>
            <LogoBox to="/">
              <Logo />
            </LogoBox>
            <Media
              query="(min-width: 801px)"
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
                  {navLinks.map(link => (
                    <Link key={link.name} to={link.to}>
                      {link.name}
                    </Link>
                  ))}
                </Flex>
              )}
            />

            <Flex
              className="actions"
              alignItems="center"
              justifyContent="flex-end"
              flex="1"
            >
              <Box mr={["3", "4"]}>SV / EN</Box>
              <Box mr={["3", "4", "0"]}>
                <ThemeToggler>
                  {({ theme, toggleTheme }) => (
                    <div
                      onClick={() =>
                        toggleTheme(theme === "light" ? "dark" : "light")
                      }
                    >
                      <ThemeSwitch
                        initial={{ rotate: 0 }}
                        whileTap={{ rotate: 360 }}
                      >
                        {theme === "light" ? (
                          <motion.svg width="24px" height="24px">
                            <motion.path
                              fill="white"
                              d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"
                            />
                          </motion.svg>
                        ) : (
                          <motion.svg width="24px" height="24px">
                            <motion.path
                              fill="white"
                              d="M10 2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z"
                            />
                          </motion.svg>
                        )}
                      </ThemeSwitch>
                    </div>
                  )}
                </ThemeToggler>
              </Box>
              <AnimatePresence>
                {menuOpen ? (
                  <Media
                    query="(max-width: 900px)"
                    render={() => (
                      <MenuToggler onClick={() => setMenuOpen(prev => !prev)}>
                        <motion.svg
                          key="open"
                          width="24px"
                          height="24px"
                          animate={{ rotate: 180 }}
                          exit={{ rotate: 0 }}
                        >
                          <motion.path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        </motion.svg>
                      </MenuToggler>
                    )}
                  />
                ) : (
                  <Media
                    query="(max-width: 900px)"
                    render={() => (
                      <MenuToggler onClick={() => setMenuOpen(prev => !prev)}>
                        <motion.svg
                          key="close"
                          width="24px"
                          height="24px"
                          animate={{ rotate: 180 }}
                          exit={{ rotate: 0 }}
                        >
                          <motion.path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                        </motion.svg>
                      </MenuToggler>
                    )}
                  />
                )}
              </AnimatePresence>
            </Flex>
          </Flex>
        </Container>
      </StyledHeader>
      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            className={overrideColor ? "override" : null}
            initial={{ y: "110vh" }}
            animate={{
              y: 0,
            }}
            exit={{ y: "110vh" }}
            transition={{
              ease: "easeInOut",
              when: "beforeChildren",
            }}
          >
            <motion.ul
              exit="exit"
              initial="initial"
              animate="visible"
              variants={container}
            >
              {navLinks.map((link, i) => (
                <NavLink
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                  key={i}
                  variants={item}
                >
                  <Link to={link.to}>{link.name}</Link>
                </NavLink>
              ))}
            </motion.ul>
          </MobileMenu>
        )}
      </AnimatePresence>
    </Fragment>
  )
}

const MobileMenu = styled(motion.div)`
  background: var(--c-bg-sec);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 120px 5% 5% 5%;
  box-sizing: border-box;
  z-index: 98;
  box-shadow: 0px -50px 100px var(--c-bg-sec);

  &.override {
    background: var(--bg-sec-dark) !important;
    a {
      color: var(--c-heading-dark);
    }
  }
`

const Compensator = styled.div`
  margin-top: ${props => (props.menuOpen ? "109px" : "0px")};
`

const NavLink = styled(motion.div)`
  text-align: center;
  a {
    color: var(--c-heading);
    text-decoration: none;
    text-transform: uppercase;
    font-weight: var(--f-weight-heading);
    font-size: 1.5rem;
  }
  margin: 2rem 0px;
`

const ThemeSwitch = styled(motion.div)`
  width: 24px;
  height: 24px;

  svg {
    fill: var(--c-heading);
    path {
      fill: var(--c-heading);
    }
  }
`

const MenuToggler = styled(motion.div)`
  position: relative;
  display: block;
  width: 24px;
  height: 24px;
  svg {
    position: absolute;
    top: 0;
    left: 0;
    fill: var(--c-heading);
    path {
      fill: var(--c-heading);
    }
  }
`

const LogoBox = styled(Link)`
  width: 100px;

  svg {
    path {
      fill: var(--i-main);
    }
  }
`
const StyledHeader = styled(motion.header)`
  background: linear-gradient(
    180deg,
    var(--c-bg-alpha) 0%,
    var(--c-bg-sec) 100%
  );
  z-index: 99;
  position: ${props => (props.menuOpen ? "fixed" : "relative")};
  top: 0;
  left: 0;
  width: 100%;

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
      path {
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
