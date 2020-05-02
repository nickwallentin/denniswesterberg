import React from "react"
import styled from "styled-components"

import LatestPosts from "../components/posts/lastestPosts"
import HubSidebar from "../components/hub/HubSidebar"
import HubHeader from "../components/hub/HubHeader"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import usePopularPosts from "../static_queries/usePopularPosts"

import {
  Container,
  Box,
  Flex,
  Grid,
  Heading,
  Button,
  Text,
  TextLink,
} from "../styles/elements"

const ArticlePage = () => {
  const popular = usePopularPosts()
  return (
    <Layout>
      <SEO title="Artiklar"></SEO>
      <HubHeader />
      <Box>
        <Container>
          <Grid py="5" gridTemplateColumns={["1fr", "2fr 1fr"]} gridGap="5">
            <Box>
              <Heading
                as="h1"
                fontWeight="var(--f-weight-subheading) !important"
                fontSize={["2rem"]}
                variant="sub"
                color="var(--c-subtle)"
              >
                Senaste artiklarna
              </Heading>
              <LatestPosts />
            </Box>
            <HubSidebar />
          </Grid>
        </Container>
      </Box>
    </Layout>
  )
}

export default ArticlePage

const Sidebar = styled.div``

const Sublinks = styled.div`
  a {
    margin: 0px;
    color: var(--c-heading);
    font-weight: 500;
    padding: 20px;
    display: inline-block;
    font-size: 1.2rem;
  }
`
const Widget = styled.div`
  margin-bottom: 4rem;

  .post-list {
    li {
      padding: 1.5rem 0;
      border-bottom: 1px solid var(--c-bg-pop);
      &:last-of-type {
        border-bottom: 0px;
      }
    }
    a {
      font-size: 1.4rem;
      font-weight: 500;
    }
    span {
      display: block;
      font-size: 1.2rem;
      color: var(--c-accent);
      font-weight: 300;
    }
  }
`
