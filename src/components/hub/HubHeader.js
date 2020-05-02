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

            <CallToAction>
              <input type="email" placeholder="Din epost" />
              <button>Prenumerera</button>
            </CallToAction>
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

const CallToAction = styled.div`
  padding: 10px;
  background: var(--c-bg-pop);
  border-radius: 3px;
  max-width: 320px;

  width: 100%;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;

  input {
    background: transparent;
    flex: 1;
    border: none;
    padding: 10px;
    color: var(--c-heading);
    &::placeholder,
    &::-webkit-input-placeholder {
      color: var(--c-sub);
    }
  }
  button {
    background: var(--c-cta);
    color: white;
    border: none;
    font-family: var(--font);
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    padding: 10px;
    border-radius: 4px;
    animation: Glow 4s infinite;
    width: 120px;
  }

  @keyframes Glow {
    0% {
      box-shadow: 0px 0px 10px var(--c-cta);
    }
    50% {
      box-shadow: 0px 0px 30px var(--c-cta);
    }
    100% {
      box-shadow: 0px 0px 10px var(--c-cta);
    }
  }
`
