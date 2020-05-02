import React, { useEffect } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { motion } from "framer-motion"
import LatestPosts from "../components/posts/lastestPosts"
import HubSidebar from "../components/hub/HubSidebar"
import HubHeader from "../components/hub/HubHeader"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import useBookData from "../static_queries/useBookData"
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

const BooksPage = () => {
  const books = useBookData()
  return (
    <Layout>
      <SEO title="Böcker"></SEO>
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
                mb="5"
              >
                Dennis böcker
              </Heading>
              <Grid gridTemplateColumns={"1fr"} gridGap="4">
                {books.map(({ node: book }) => (
                  <Book>
                    <Link to={"/bocker/" + book.fields.slug}>
                      <Img
                        style={{ boxShadow: "0px 0px 30px rgba(0,0,0,0.2)" }}
                        fluid={book.frontmatter.image.large.fluid}
                      />
                    </Link>
                    <Flex flexDirection="column" justifyContent="center">
                      <Link to={"/bocker/" + book.fields.slug}>
                        <Heading fontSize="1.5rem">
                          {book.frontmatter.title}
                        </Heading>
                      </Link>
                      <Link to={"/bocker/" + book.fields.slug}>
                        <Heading
                          color="var(--c-accent)"
                          mb="3"
                          as="h4"
                          mt="2"
                          fontSize="1.2rem"
                        >
                          {book.frontmatter.subtitle}
                        </Heading>
                      </Link>
                      <Link to={"/bocker/" + book.fields.slug}>
                        <Text color="var(--c-body)">
                          {book.frontmatter.intro}
                        </Text>
                      </Link>
                      <Flex className="links">
                        <a
                          className="main"
                          target="_blank"
                          href={book.frontmatter.buy_url}
                        >
                          Köp boken
                        </a>
                        <a href="#">Ljudbok</a>
                      </Flex>
                    </Flex>
                  </Book>
                ))}
              </Grid>
            </Box>
            <HubSidebar />
          </Grid>
        </Container>
      </Box>
    </Layout>
  )
}

export default BooksPage

const Book = styled.div`
  padding: 2rem;
  background: var(--c-bg-sec);
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 2rem;
  border-radius: 4px;
  a {
    color: var(--c-heading);
  }

  .links {
    margin-top: 2rem;
    a {
      margin-right: 10px;
      padding: 10px 15px;
      background: var(--c-bg-pop);
      border-radius: 3px;
      font-weight: 500;
      cursor: pointer;
      &.main {
        background: var(--c-accent);
        color: var(--c-bg);
      }
    }
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`
