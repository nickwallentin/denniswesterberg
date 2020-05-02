import React, { useEffect } from "react"
import styled from "styled-components"

import HubSidebar from "../components/hub/HubSidebar"
import HubHeader from "../components/hub/HubHeader"
import Layout from "../components/Layout"
import SEO from "../components/seo"

import { Link } from "gatsby"

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

const PodcastPage = () => {
  return (
    <Layout>
      <SEO title="Podcasts"></SEO>
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
                mb="4"
              >
                Dennis podcasts
              </Heading>
              <iframe
                src="https://open.spotify.com/embed-podcast/show/6WcO5GvgWXhUxmpz9ET2Kt"
                width="100%"
                height="232"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
                style={{ marginBottom: "2rem" }}
              ></iframe>
              <iframe
                src="https://open.spotify.com/embed-podcast/show/1bxnsV3M8v7GmMYx8vlaER"
                width="100%"
                height="232"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
                style={{ marginBottom: "2rem" }}
              ></iframe>
              <Heading
                as="h2"
                fontWeight="var(--f-weight-subheading) !important"
                fontSize={["2rem"]}
                variant="sub"
                color="var(--c-subtle)"
                mb="4"
                mt="4"
              >
                Medverkan i podcasts
              </Heading>
              <iframe
                src="https://open.spotify.com/embed-podcast/episode/6uYvKKNlSh4GfsoYUkrE3L"
                width="100%"
                height="232"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
                style={{ marginBottom: "2rem" }}
              ></iframe>
              <iframe
                src="https://open.spotify.com/embed-podcast/episode/7Da8CaxFnnOJh3vcqRDJH0"
                width="100%"
                height="232"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
                style={{ marginBottom: "2rem" }}
              ></iframe>
              <iframe
                src="https://open.spotify.com/embed-podcast/episode/2OBpRUTxXcVJpJbO5c5XoL"
                width="100%"
                height="232"
                frameborder="0"
                allowtransparency="true"
                allow="encrypted-media"
                style={{ marginBottom: "2rem" }}
              ></iframe>
            </Box>
            <HubSidebar />
          </Grid>
        </Container>
      </Box>
    </Layout>
  )
}

export default PodcastPage
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
