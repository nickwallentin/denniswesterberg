import styled from "styled-components"
import { motion } from "framer-motion"
import {
  compose,
  space,
  display,
  position,
  layout,
  color,
  flexbox,
  grid,
  typography,
} from "styled-system"
import { Link } from "gatsby"

const basic = compose(
  space,
  display,
  position,
  color,
  flexbox,
  layout,
  grid,
  typography
)

export const Box = styled(motion.div)(
  basic,
  `

`
)

export const Flex = styled(motion.div)(
  basic,
  `
display: flex;
`
)

export const Grid = styled(motion.div)(
  basic,
  `
    display: grid;
    `
)

export const Container = styled.div(
  basic,
  `
  max-width: 1100px;
  width: 90%;
  margin: 0 auto;
`
)
export const Heading = styled(motion.h2)(
  basic,
  `

`
)

export const TextLink = styled(Link)(
  basic,
  `
  
  text-decoration: none;
  text-transform: uppercase;
  font-weight: var(--f-weight-heading);
  color: var(--c-accent);
  display: inline-flex;
  align-items: center;

  svg {
    width: 40px;
    height: 40px;
    margin-left: 1rem;
    path {
      fill: var(--c-accent);
    }
  }
`
)
