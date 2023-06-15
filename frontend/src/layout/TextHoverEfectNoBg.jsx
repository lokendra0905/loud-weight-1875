import styled from '@emotion/styled'
import React from 'react'

const TextHoverEfectNoBg = ({text}) => {
  return (
    <DIV>
      <p data-text={text}>{text}</p>
    </DIV>
  )
}

export default TextHoverEfectNoBg

const DIV=styled.div`
      p {
      font-size: 15px;
      font-weight :bold ;
      position: relative;
      display: inline-block;
      color: #6504b5;
      cursor: pointer;
    }

    p::before {
      content: attr(data-text);
      position: absolute;
      left: 0;
      top: 0;
      overflow: hidden;
      white-space: nowrap;
      width: 0;
      color: #6504b5;
      transition: width 1s;
    }

    p:hover::before {
      width: 100%;
      color: green;
      /* transition-timing-function: linear; */
    }

`