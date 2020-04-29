import React from "react"
import styled from "styled-components"
import {
  Box,
  Grid,
  Heading,
  Text,
  BoxLink,
  TextLink,
} from "../../styles/elements"

import usePopularPosts from "../../static_queries/usePopularPosts"
import { Link } from "gatsby"

import ForwardIcon from "../../assets/svg/forward.svg"

const containerMotion = {}

const itemMotion = {}

const PopularPosts = () => {
  const posts = usePopularPosts()
  return (
    <Grid mt="5" gridTemplateColumns={["1fr", "1fr 1fr"]} gridGap="5">
      {posts.map(post => (
        <Box key={post.node.id} whileHover="hover">
          <BoxLink to={post.node.fields.slug}>
            <Heading fontSize="2rem">{post.node.frontmatter.title}</Heading>
            <Heading as="h4" mt="2" fontSize="1.5rem" color="var(--c-accent)">
              {post.node.frontmatter.subtitle}
            </Heading>
            <Text mt="4">{post.node.frontmatter.intro}</Text>
            <TextLink as="span" mt="4" to="/">
              Läs inlägget <ForwardIcon />
            </TextLink>
          </BoxLink>
        </Box>
      ))}
    </Grid>
  )
}

export default PopularPosts
