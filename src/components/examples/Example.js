import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Wrapper = styled.div`
  border-top: 1px solid #000;
  text-align:left;
  padding: 20px;

  ul{
    padding:0;
    li{
      padding:0;
      list-style:none;
      margin-bottom:5px;
    }
  }
  .data{
    margin-bottom:20px;
  }
  .tags{
    a{
      text-decoration:none;
      color:#CCC;
      &:hover{
        color:#333;
      }
    }
  }
  .content{
    border-left:5px solid #EEE;
    padding-left:20px;
  }
`

const Example = ({ data, children }) => (
  <Wrapper>
    <h1>{data.title}</h1>
    <div className="data tags">
      { data.tags.map((tag, index) => (<a href={ `#${tag}` } key={ `tag_${index}` }>#{tag}</a>)) }
    </div>
    <ul className="data">
      { data.sources.map((source, index) => (<li><a href={ source } target="_blank" rel="noopener noreferrer" key={ `source_${index}` }>{source}</a></li>)) }
    </ul>
    <div className="content">{ children}</div>
  </Wrapper>
)

Example.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
}

export default Example
