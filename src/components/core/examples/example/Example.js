import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import keyIndex from "react-key-index"
import withExample from "./withExample"

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
  
  .data{
    margin-bottom:10px;
    clear:both;
    font-size:13px;
  }
  .tags{
    a{
      text-decoration:none;
      color:#222;
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
    border: 1px solid #EEE; 
  }
`

const Header = styled.div`
  clear:both;
  padding:15px 15px;
  
  background:#F1F1F1;
`

const Example = ({ data, children, onSelectTag }) => {
  const tags = keyIndex(data.tags, 1)
  const sources = keyIndex(data.sources, 1)

  return (
    <Wrapper>
      <h1>{data.title}</h1>
      <Header>
        <div className="data tags">
          {
            tags.map(tag => (
              <span key={ tag.id }>
                <a href="" onClick={ e => onSelectTag(tag, e) } >#{tag.value} </a>
              </span>
            ))
          }
        </div>
        { data.desc && data.desc.length > 0 && <div className="data">{data.desc}</div> }
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
  children: PropTypes.any.isRequired,
  onSelectTag: PropTypes.func.isRequired,
}

export default withExample(Example)
