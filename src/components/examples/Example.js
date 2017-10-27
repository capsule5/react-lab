import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import keyIndex from "react-key-index"

const Wrapper = styled.div`
  text-align:left;
  padding: 20px;

  h1{
    margin-top:0px;
  }
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
    padding-top:20px;
    border-top:2px solid #EEE;
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
