import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import keyIndex from "react-key-index"
import withExample from "./withExample"

const Wrapper = styled.div`
  text-align:left;
  border: 1px solid #EEE;
  margin: 0 20px 20px;
  background:#F1F1F1;

  h1{
    margin:0px 0 10px;
  }
  
  .data{
    margin-bottom:10px;
  }
  .tags{
    a{
      text-decoration:none;
      color:#333;
      &:hover{
        text-decoration:underline;
      }
    }
  }
  
  ul.sources{
    padding:0;
    margin:0;
    li{

      list-style:none;
      margin-bottom:2px;
    }
    a{
      text-decoration:none;
      color:#999;
      font-size:13px;
      &:hover{
        text-decoration:underline;
      }
    }
  }
  .content{
    padding:20px;
    border-top:1px solid #EEE;
    background:#FFF;
  }
`

const Header = styled.div`
  padding:20px;
`

const Example = ({ data, children, onSelectTag }) => {
  const tags = keyIndex(data.tags, 1)
  const sources = keyIndex(data.sources, 1)

  return (
    <Wrapper>
      <Header>
        <h1>{data.title}</h1>
        <div className="data tags">
          {
            tags.map(tag => (
              <span key={ tag.id }>
                <a href="" onClick={ e => onSelectTag(tag, e) } >#{tag.value} </a>
              </span>
            ))
          }
        </div>
        <ul className="data sources">
          {
            sources.map(source => (
              <li key={ source.id }>
                <a href={ source.value } target="_blank" rel="noopener noreferrer" >{source.value}</a>
              </li>
            ))
          }
        </ul>
      </Header>
      
      <div className="content">{ children}</div>
    </Wrapper>
  )
}

Example.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
  onSelectTag: PropTypes.func.isRequired,
}

export default withExample(Example)
