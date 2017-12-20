import React from "react"
import { Highlight } from "react-instantsearch/dom"
import styled from "styled-components"


const Wrapper = styled.div`
  border-top:1px solid #CCC;
  padding:10px 0;
  .ais-Highlight__highlighted{
    color:violet;
    font-style:normal;
  }
  .name{}
  .category{
    font-size:12px;
  }
`

const Item = ({ hit }) => (
  <Wrapper>
    <div className="name">
      <Highlight attributeName="name" hit={ hit } />
    </div>
    <div className="category" >
      <Highlight attributeName="category" hit={ hit } />
    </div>
    {/* {hit.name} */}
  </Wrapper>
    
)

export default Item
