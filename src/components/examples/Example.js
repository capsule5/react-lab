import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import keyIndex from "react-key-index"

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

const Example = ({ data, children }) => {
  const tags = keyIndex(data.tags, 1)
  const sources = keyIndex(data.sources, 1)

  return (
    <Wrapper>
      <h1>{data.title}</h1>
      <div className="data tags">
        { tags.map(tag => (<a href={ `#${tag.value}` } key={ tag.id }>#{tag.value}</a>)) }
      </div>
      <ul className="data">
        { sources.map(source => (<li key={ source.id }><a href={ source.value } target="_blank" rel="noopener noreferrer" >{source.value}</a></li>)) }
      </ul>
      <div className="content">{ children}</div>
    </Wrapper>
  )
}

Example.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
}

export default Example
