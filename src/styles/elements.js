import styled from "styled-components"
import { motion } from "framer-motion"
import {
  compose,
  space,
  display,
  position,
  color,
  flexbox,
  grid,
} from "styled-system"

const basic = compose(space, display, position, color, flexbox, grid)

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
