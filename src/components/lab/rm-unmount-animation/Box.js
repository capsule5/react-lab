import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { TransitionMotion, spring } from "react-motion"

const Wrapper = styled.div`
  background: yellow;
  width: 200px;
  padding:20px;
  text-align: center;
`

class Child extends React.Component {
  constructor(props) {
    super(props)

    console.log("[stab]", "Child") //eslint-disable-line
  }

  willEnter() {
    return {
      opacity: 0,
    }
  }
  willLeave() {
    return {
      opacity: spring(0),
    }
  }
  render() {
    return (
      <TransitionMotion
        styles={ this.props.isMounted ? [] : [ {
          key: "child",
          data: {},
          style: { opacity: spring(1) },
        } ] }
        willEnter={ this.willEnter }
        willLeave={ this.willLeave }
      >
        {
          items => (
            <div>
              {
                items.map(item => (
                  <Wrapper key={ item.key } style={ { opacity: item.style.opacity } }> Unmount me! </Wrapper>
                ))
              }
            </div>
          )
        }
      </TransitionMotion>
    )
  }
}

Child.propTypes = {
  isMounted: PropTypes.bool.isRequired,
}

export default Child
