import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`

  margin-bottom:10px;
  button{
    margin-right: 10px;
  }
  .count{
    padding-left: 20px;
    font-size: 14px;
  }
`

class Menu extends React.PureComponent {
  render() {
    const { isLive, count, start, stop, reset } = this.props
    return (
      <Wrapper>
        {
          isLive ?
            <button onClick={ stop }>stop</button> :
            <button onClick={ start }>start</button>
        }
        <button onClick={ reset }>reset</button>
        <span className="count">generations: {count}</span>
      </Wrapper>
    )
  }
}

export default (Menu)
