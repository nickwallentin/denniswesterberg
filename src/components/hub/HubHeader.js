import React, { useEffect } from "react"
import styled from "styled-components"

import usePopularPosts from "../../static_queries/usePopularPosts"
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
} from "../../styles/elements"

const HubHeader = () => {
  const popular = usePopularPosts()
  return (
    <Box bg="var(--c-bg-sec)">
      <Container>
        <Grid pt="4">
          <Box textAlign="center" maxWidth="600px" m="0 auto">
            <Heading mb="2" fontSize={["1.8rem", "2.5rem"]} as="h3">
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
  )
}

export default HubHeader

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
