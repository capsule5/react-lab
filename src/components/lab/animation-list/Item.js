import React, { Component } from "react"
import PropTypes from "prop-types"
import ReactDOM from "react-dom"
import { TimelineLite } from "gsap"
import styled from "styled-components"

const Wrapper = styled.div`
  background:violet;
  display:inline-block;
  overflow:hidden;
  text-align:center;
  opacity:0;
  width:0;
  padding:10px;
`


const animateIn = (DOMNode, index) => {
  new TimelineLite()
    .delay(index * 0.1)
    .to(DOMNode, 0.5, { width: "auto", margin: 0, autoAlpha: 1 })
}

const animateOut = (DOMNode, index, callback) => {
  new TimelineLite()
    .delay(index * 0.1)
    .to(DOMNode, 0.5, { width: 0, margin: 0, autoAlpha: 0, onComplete: callback })
}

class Item extends Component {
  componentDidMount() {
    this.DOMNode = ReactDOM.findDOMNode(this) // eslint-disable-line react/no-find-dom-node
  }
  componentDidAppear () {
    animateIn(this.DOMNode, this.props.index)
  }
  componentDidEnter () {
    animateIn(this.DOMNode, this.props.index)
  }
  componentWillLeave (callback) {
    animateOut(this.DOMNode, this.props.index, callback)
  }
  render() {
    return (
      <Wrapper>{this.props.children}</Wrapper>
    )
  }
}


Item.defaultProps = {}
Item.propTypes = {
  children: PropTypes.any.isRequired,
  index: PropTypes.number.isRequired,
}

export default Item
