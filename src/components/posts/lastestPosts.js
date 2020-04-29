import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  BoxLink,
  TextLink,
} from "../../styles/elements"

import useBlogData from "../../static_queries/useBlogData"
import { Link } from "gatsby"

import ForwardIcon from "../../assets/svg/forward.svg"

const containerMotion = {
  initial: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemMotion = {
  initial: { opacity: 0 },
  visible: {
    opacity: 1,
  },
}

const hoverMotion = {
  initial: { x: 0 },
  hover: { x: 10 },
}

const LatestPosts = () => {
  const posts = useBlogData()

  return (
    <Grid
      mt={["4", "5"]}
      gridGap="5"
      initial="initial"
      animate="visible"
      variants={containerMotion}
    >
      {posts.map(post => (
        <Box variants={itemMotion} key={post.node.id} whileHover="hover">
          <BoxLink to={post.node.fields.slug}>
            <Heading fontSize="2rem">{post.node.frontmatter.title}</Heading>
            <Heading as="h4" mt="2" fontSize="1.5rem" color="var(--c-accent)">
              {post.node.frontmatter.subtitle}
            </Heading>
            <Text mt="4">{post.node.frontmatter.intro}</Text>
            <TextLink as="span" mt="4" to="/">
              Läs inlägget
              <motion.span variants={hoverMotion}>
                <ForwardIcon />
              </motion.span>
            </TextLink>
          </BoxLink>
        </Box>
      ))}
    </Grid>
  )
}

export default LatestPosts

const Category = styled.div`
  margin-bottom: 1rem;
  margin-right: 5px;

  text-transform: capitalize;
`
