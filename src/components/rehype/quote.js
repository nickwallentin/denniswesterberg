import React from "react"
import styled from "styled-components"

const QuoteElement = props => {
  return (
    <Quote>
      "{props.children}" <span>- {props.author}</span>
    </Quote>
  )
}

export default QuoteElement

const Quote = styled.div`
  color: var(--c-accent);
  font-size: 2rem;
  line-height: 2.8rem;
  span {
    display: block;
    margin-top: 1rem;
    color: var(--c-heading);
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
  @media (max-width: 500px) {
    font-size: 1.5rem;
    line-height: 2.3rem;
    span {
      font-size: 1rem;
      line-height: 1rem;
    }
  }
`
