import React from "react"
import PropTypes from "prop-types"

class ScrollWatch extends React.Component {
  state = { x: 0, y: 0 };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }
  
  handleScroll = () => {
    this.setState({
      x: window.scrollX,
      y: window.scrollY,
    })
  };
  
  render() {
    const { x, y } = this.state
    return this.props.render(x, y)
  }
}

ScrollWatch.propTypes = {
  render: PropTypes.func.isRequired,
}

export default ScrollWatch
