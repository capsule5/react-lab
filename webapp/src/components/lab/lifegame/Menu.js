import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`

  display:flex;
  align-items:center;
  margin-bottom:10px;
  .buttons{display:inline-block;height:24px;}
  .button{
    display:inline-block;
    margin-right: 10px;
    cursor:pointer;
    height:24px;
    user-select: none; 
    &:hover{
      color:#666
    }
    &.disabled{
      color:#CCC;
      cursor:default;
    }
  }
  .count{
    //padding-left: 20px;
    font-size: 12px;
  }
`

class Menu extends React.PureComponent {
  render() {
    const { isLive, count, start, stop, reset, next, previous, historyLength } = this.props
    return (
      <Wrapper>
        <div className="button" onClick={ isLive ? stop : start }><i className="material-icons">{isLive ? "stop" : "play_arrow"}</i></div>
        <div className={ `button ${(isLive || historyLength <= 1) && "disabled"}` } onClick={ previous }><i className="material-icons">skip_previous</i></div>
        <div className={ `button ${isLive && "disabled"}` } onClick={ next }><i className="material-icons">skip_next</i></div>
        <div className={ "button" } onClick={ reset }><i className="material-icons">clear</i></div>
        <span className="count">generations : {count}</span>
      </Wrapper>
    )
  }
}

export default (Menu)
