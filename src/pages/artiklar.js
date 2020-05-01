import React, { useEffect } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { motion } from "framer-motion"
import LatestPosts from "../components/posts/lastestPosts"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import usePopularPosts from "../static_queries/usePopularPosts"
import { Link } from "gatsby"

import ForwardIcon from "../assets/svg/forward.svg"

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
      <SEO title="Blogg"></SEO>
      <Box bg="var(--c-bg-sec)">
        <Container>
          <Grid pt="5">
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
          <Flex mt="5" justifyContent="center">
            <Sublinks>
              <Link activeStyle={{ color: "var(--c-accent)" }} to="/artiklar">
                Artiklar
              </Link>
              <Link activeStyle={{ color: "var(--c-accent)" }} to="/podcast">
                Podcast
              </Link>
              <Link activeStyle={{ color: "var(--c-accent)" }} to="/bocker">
                Böcker
              </Link>
            </Sublinks>
          </Flex>
        </Container>
      </Box>
      <Box>
        <Container>
          <Grid py="5" gridTemplateColumns={["1fr", "2fr 1fr"]} gridGap="5">
            <Box>
              <Heading
                as="h4"
                fontWeight="var(--f-weight-subheading) !important"
                fontSize={["2rem"]}
                variant="sub"
                color="var(--c-subtle)"
              >
                Senaste artiklarna
              </Heading>
              <LatestPosts />
            </Box>
            <Sidebar>
              <Widget>
                <Heading
                  as="h4"
                  fontWeight="var(--f-weight-subheading) !important"
                  fontSize={["1.5rem"]}
                  variant="sub"
                  mb="4"
                >
                  Senaste podcasten
                </Heading>
                <iframe
                  src="https://open.spotify.com/embed-podcast/show/6WcO5GvgWXhUxmpz9ET2Kt"
                  width="100%"
                  height="232"
                  frameborder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>
              </Widget>
              <Widget>
                <Heading
                  as="h4"
                  fontWeight="var(--f-weight-subheading) !important"
                  fontSize={["1.5rem"]}
                  variant="sub"
                  mb="3"
                >
                  Populära artiklar
                </Heading>
                <ul className="post-list">
                  {popular.map((node, index) => (
                    <li>
                      <Link
                        style={{ color: "var(--c-heading)" }}
                        to={node.node.fields.slug}
                      >
                        {node.node.frontmatter.title}
                        <span>{node.node.frontmatter.subtitle}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Widget>
            </Sidebar>
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
    margin: 0px 15px;
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
