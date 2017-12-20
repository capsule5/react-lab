import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import styled, { keyframes } from "styled-components"
import Example from "components/core/examples/example/Example"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"
import { merge, bounceIn, fadeIn, fadeOutUp } from "react-animations"

const mergeIn = merge(bounceIn, fadeIn)
const animIn = keyframes`${mergeIn}`
const animOut = keyframes`${fadeOutUp}`
const duration = 1000

const Wrapper = styled.div`
  .item{
    cursor:pointer;
    padding-left:5px;
    &:hover{color:violet}
    display:inline-block;
    font-size:50px;
  }
  /* .item-enter {
    opacity: 0.01;
  } */

  .item-enter.item-enter-active {
    animation: ${duration}ms ${animIn};
  }

  /* .item-leave {
    opacity: 1;
  } */

  .item-leave.item-leave-active {
    animation: ${duration}ms ${animOut};
  }
`

class CSSTransitionGroup extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { items: [ "hello", "world" ] }
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd() {
    const newItems = this.state.items.concat([
      prompt("Enter some text"),
    ])
    this.setState({ items: newItems })
  }

  handleRemove(i) {
    const newItems = this.state.items.slice()
    newItems.splice(i, 1)
    this.setState({ items: newItems })
  }


  render() {
    const items = this.state.items.map((item, i) => (
      <div key={ item } onClick={ () => this.handleRemove(i) } className="item">
        {item}
      </div>
    ))
    return (
      <Example data={ this.props.data }>
        <Wrapper>
          <button onClick={ this.handleAdd }>Add word</button>
          <ReactCSSTransitionGroup
            transitionName="item"
            transitionEnterTimeout={ duration }
            transitionLeaveTimeout={ duration }
          >

            {items}
          </ReactCSSTransitionGroup>
        </Wrapper>
      </Example>
    )
  }
}

CSSTransitionGroup.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CSSTransitionGroup
