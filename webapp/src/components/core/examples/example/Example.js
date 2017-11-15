import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Tags from "./Tags"
import Links from "./Links"

const Wrapper = styled.div`
  text-align:left;
  margin: 0 30px 40px;
  background:#FFF;

  .example-top{
    display:flex;
    align-items:center;
    h1{
      margin:0px 0 0px;
      background:#222;
      color:#FFF;
      float:left;
      font-weight:normal;
      padding:5px 15px;
      font-size:25px;
    }
  }

  .example-data{
    clear:both;
    padding:15px 15px;
    background:#F1F1F1;
    .data{
      margin-bottom:10px;
      clear:both;
      font-size:13px;
    }
  }
  
  .example-content{
    padding:20px;
    border: 1px solid #EEE; 
  } 

  .example-source{
    color:#333;
    font-size:11px;
    text-align:right;
    display: block;
    // transform: translateY(-17px) translateX(-5px);
  }
`

const Example = ({ data, children }) => {
  const { title, desc, tags, links, github } = data

  return (
    <Wrapper>
      <div className="example-top">
        <h1>{title}</h1>
        
      </div>
      <div className="example-data">
        { tags && <Tags tags={ tags } /> }
        { desc && desc.length > 0 && <div className="data">{desc}</div> }
        { links && <Links links={ links } /> }
      </div>
      <div className="example-content">{ children}</div>
      { github && <a href={ github } target="_blank" rel="noopener noreferrer" className="example-source">view source</a> }
    </Wrapper>
  )
}

Example.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired,
}

export default Example
