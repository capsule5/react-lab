import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Wrapper = styled.div`
background: yellow;
width: 200px;
padding:20px;
text-align: center;
transition: all 1s ease-out;
opacity:0;
&.isMounted{
  opacity:1
}
`

class Child extends PureComponent {
  constructor(props) {
    super(props)
    this.transitionEnd = this.transitionEnd.bind(this)
    this.willEnter = this.willEnter.bind(this)
    this.willLeave = this.willLeave.bind(this)
    this.state = {
      isShow: true,
      isMounted: false,
    }
  }

  componentDidMount() {
    setTimeout(this.willEnter, 0)
  }
  
  componentWillReceiveProps(newProps) {
    if (!newProps.isMounted) {
      return this.willLeave()
    }
    this.setState({ isShow: true })
    setTimeout(this.willEnter, 10)
  }
  
  willLeave() {
    this.setState({ isMounted: false })
  }
  
  willEnter() {
    this.setState({ isMounted: true })
  }
  
  transitionEnd() {
    if (!this.props.isMounted) { // remove the node on transition end when the mounted prop is false
      this.setState({ isShow: false })
    }
  }
  
  render() {
    return this.state.isShow &&
      <Wrapper className={ this.state.isMounted && "isMounted" } onTransitionEnd={ this.transitionEnd }>
        Unmount me!
      </Wrapper>
  }
}

Child.propTypes = {
  isMounted: PropTypes.bool.isRequired,
}

export default Child
