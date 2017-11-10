import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Tags from "./Tags"
import Links from "./Links"

const Wrapper = styled.div`
  text-align:left;
  margin: 0 30px 40px;
  background:#FFF;

  h1{
    margin:0px 0 0px;
    background:#222;
    color:#FFF;
    float:left;
    font-weight:normal;
    padding:5px 15px;
    font-size:25px;
  }
  
  .example-content{
    padding:20px;
    border: 1px solid #EEE; 
  }
`

const Header = styled.div`
  clear:both;
  padding:15px 15px;
  background:#F1F1F1;
  .data{
    margin-bottom:10px;
    clear:both;
    font-size:13px;
  }
`

const Example = ({ data, children }) => {
  const { title, desc, tags, links } = data

  return (
    <Wrapper>
      <h1>{title}</h1>
      <Header>
        <Tags tags={ tags } />
        { desc && desc.length > 0 && <div className="data">{desc}</div> }
        <Links links={ links } />
      </Header>
      <div className="example-content">{ children}</div>
    </Wrapper>
  )
}

Example.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
}

export default Example
