import React from "react"
import styled from "styled-components"

const QuoteElement = props => {
  return (
    <Quote>
      {props.children} <span>{props.author}</span>
    </Quote>
  )
}

export default QuoteElement

const Quote = styled.div``
