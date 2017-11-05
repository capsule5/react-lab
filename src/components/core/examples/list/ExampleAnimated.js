import React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"
import { TimelineLite, Expo } from "gsap"
import styled from "styled-components"

const Wrapper = styled.div`
  opacity:0;
  height:0;
  overflow:hidden;
`

const animateIn = (DOMNode) => {
  new TimelineLite()
    .set(DOMNode, { height: "auto", autoAlpha: 1 })
    .from(DOMNode, 0.4, { height: 0, autoAlpha: 0, ease: Expo.easeOut })
}

const animateOut = (DOMNode, callback) => {
  new TimelineLite()
    .to(DOMNode, 0.4, { height: 0, autoAlpha: 0, onComplete: callback })
}

class AnimatedGridContents extends React.Component {
  componentDidMount() {
    this.DOMNode = ReactDOM.findDOMNode(this) // eslint-disable-line react/no-find-dom-node
  }
  componentDidAppear () {
    animateIn(this.DOMNode)
  }
  componentDidEnter () {
    animateIn(this.DOMNode)
  }
  componentWillLeave (callback) {
    animateOut(this.DOMNode, callback)
  }
  render () {
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>
    )
  }
}

AnimatedGridContents.propTypes = {
  children: PropTypes.any.isRequired,
}

export default AnimatedGridContents
