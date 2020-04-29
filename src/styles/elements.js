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
  variant,
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

export const Text = styled(motion.p)(
  basic,
  `
font-size: 1.2rem;
line-height: 1.8rem;
`
)

export const BoxLink = styled(Link)(
  basic,
  `
  text-decoration: none;
  color: inherit;
  `
)

export const TextLink = styled(Link)(
  basic,
  `
  
  text-decoration: none;
  text-transform: uppercase;
  font-weight: var(--f-weight-heading);
  color: var(--c-heading);
  display: inline-flex;
  align-items: center;

  svg {
    width: ${props => props.iconSize || "24px"};
    height: ${props => props.iconSize || "24px"};
    margin-left: 1rem;
    path {
      fill: var(--c-accent);
    }
  }
`
)
