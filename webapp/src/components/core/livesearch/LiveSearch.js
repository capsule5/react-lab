import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "react-router-dom"
import withLiveSearch from "./withLiveSearch"


const Wrapper = styled.div`
  margin-right:20px;
  position:relative;

  .svg-icon-search{
    position: absolute;
    right:0;
    top:6px;
    width:25px;
    height:25px;
    z-index:2;
    fill:#EEE;
    cursor:pointer;
    background: #222;
  }

  input{
    background: #222;
    border: none;
    border-bottom: 1px solid #333;
    display: block;
    padding: 10px 0;
    color: #eee;
    font-size: 14px;
    &:focus {
      border-color: #333;
      box-shadow: none;
      outline: none;
    }
    &:before{
      content:&#128269;
    }

    width:0;
    min-width: 0px;
    opacity:0;
    transition: all .2s ease-out;
    &.isActive{
      min-width: 250px;
      opacity:1;
    }
  }
  .results{
    position: absolute;
    background: #222;
    font-size:14px;
    padding:5px 10px;
    li{
      margin-bottom:5px;
      a{
        color:#FFF;
        text-decoration:none;
        &:hover{
          text-decoration:underline;
        }
      }
    }
  }
`

class LiveSearch extends React.PureComponent {
  componentWillReceiveProps(nextProps) {
    if (nextProps.isActive && !this.props.isActive) {
      this.searchInput.focus()
    }
  }


  render() {
    const { onChange, onBlur, onFocus, results, onIconClick, isActive } = this.props
    return (
      <Wrapper>
        <svg className="svg-icon-search" viewBox="0 0 20 20" onClick={ onIconClick }>
          <path d="M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z" />
        </svg>

        <input
          type="text"
          placeholder="Search for examples"
          onChange={ onChange }
          onBlur={ onBlur }
          onFocus={ onFocus }
          className={ isActive ? "isActive" : "" }
          ref={ (el) => {
            this.searchInput = el
          } }
        />
        <ul className="results">
          {
            results.map(result => (
              <li key={ result.id }>
                <Link to={ result.path }>{result.title}</Link>
              </li>
            ))
          }
        </ul>
      </Wrapper>
    )
  }
}

LiveSearch.defaultProps = {
  results: [],
}

LiveSearch.propTypes = {
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onIconClick: PropTypes.func.isRequired,
  results: PropTypes.array,
  isActive: PropTypes.bool.isRequired,
}

export default withLiveSearch(LiveSearch)
