import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { Motion, spring } from "react-motion"
import styled from "styled-components"
import Example from "components/core/examples/example/Example"

const Wrapper = styled.div`
  .demo0 {
    border-radius: 4px;
    position: relative;
    margin: 5px 3px 10px;
    width: 450px;
    height: 50px;
    background:#EEE;
  }
  .demo0-block {
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 4px;
    background-color: violet;
  }
`


class RMSimpleTransition extends PureComponent {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  handleMouseDown = () => {
    this.setState({ open: !this.state.open })
  };

  handleTouchStart = (e) => {
    e.preventDefault()
    this.handleMouseDown()
  };

  render() {
    return (
      <Example data={ this.props.data }>
        <button
          onMouseDown={ this.handleMouseDown }
          onTouchStart={ this.handleTouchStart }
        >
          Toggle
        </button>

        <Wrapper>
          <Motion style={ { x: spring(this.state.open ? 400 : 0) } }>
            {({ x }) =>
            // children is a callback which should accept the current value of
            // `style`
              (<div className="demo0">
                <div
                  className="demo0-block"
                  style={ {
                    WebkitTransform: `translate3d(${x}px, 0, 0)`,
                    transform: `translate3d(${x}px, 0, 0)`,
                  } }
                />
              </div>)
            }
          </Motion>
        </Wrapper>
        
      </Example>
    )
  }
}

RMSimpleTransition.propTypes = {
  data: PropTypes.object.isRequired,
}

export default RMSimpleTransition
