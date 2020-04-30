import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import LatestPosts from "../components/posts/lastestPosts"
import Layout from "../components/Layout"
import SEO from "../components/seo"

import NotificationsIcon from "../assets/svg/notifications.svg"

import {
  Container,
  Box,
  Flex,
  Grid,
  Heading,
  Button,
  Text,
} from "../styles/elements"

const BlogPage = () => {
  return (
    <Layout>
      <SEO title="Blogg"></SEO>
      <Box bg="var(--c-bg-sec)">
        <Container>
          <Grid gridTemplateColumns={["1fr", "1fr 1fr"]} py="5">
            <Box>
              <Heading mb="4" fontSize="3.5rem" as="h1">
                Blogg
              </Heading>
              <Text>
                Det finns en djupt rotad föreställning hos oss människor, om att
                stress är en naturlig och ofrånkomlig del av livet. Dessutom en
                viktig ingrediens för framgång.
              </Text>
            </Box>
            <Flex alignItems="center" justifyContent="flex-end">
              <Button py={["2", "3"]} px={["2", "4"]} bg="var(--c-bg-pop)">
                <NotificationsIcon />
                Nyhetsbrev
              </Button>
            </Flex>
          </Grid>
        </Container>
      </Box>
      <Box>
        <Container>
          <Grid gridTemplateColumns={["1fr", "2fr 1fr"]}>
            <LatestPosts />
          </Grid>
        </Container>
      </Box>
    </Layout>
  )
}

export default BlogPage
