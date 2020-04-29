import React, { Fragment } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import Header from "../components/Header"
import PopularPosts from "../components/posts/popularPosts"
import { Box, Container, Heading } from "../styles/elements"

import HeroSection from "../components/special/HeroSection"

export default function IndexPage() {
  return (
    <Fragment>
      <HeroSection />
      <Box py={["6"]}>
        <Container>
          <Heading
            as="h4"
            fontWeight="var(--f-weight-subheading) !important"
            fontSize={["2rem"]}
            variant="sub"
            color="var(--c-subtle)"
          >
            Populära artiklar
          </Heading>
          <PopularPosts />
        </Container>
      </Box>
    </Fragment>
  )
}
