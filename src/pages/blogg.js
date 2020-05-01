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
          <Grid py="5">
            <Box textAlign="center" maxWidth="600px" m="0 auto">
              <Heading mb="2" fontSize={["1.8rem", "2.5rem"]} as="h1">
                Få exklusivt innehåll
              </Heading>
              <Heading mb="4" color="var(--c-accent)" fontSize="1.5rem" as="h4">
                Gå med i nyhetsbrevet.
              </Heading>

              <Text mt="4">Formulär mailchimp</Text>
            </Box>
          </Grid>
        </Container>
      </Box>
      <Box>
        <Container>
          <Grid gridTemplateColumns={["1fr"]} m="0 auto" maxWidth="700px">
            <LatestPosts />
          </Grid>
        </Container>
      </Box>
    </Layout>
  )
}

export default BlogPage
