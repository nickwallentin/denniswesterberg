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

export const Container = styled.div`
  max-width: 1100px;
  width: 90%;
  margin: 0 auto;
`
export const Heading = styled(motion.h2)(
  basic,
  `

`
)
