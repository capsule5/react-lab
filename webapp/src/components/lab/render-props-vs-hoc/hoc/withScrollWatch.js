import React from "react"

export default (WrappedComponent) => {
  class withScrollWatch extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        x: 0,
        y: 0,
      }
      this.handleScroll = this.handleScroll.bind(this)
    }
  
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
      return <WrappedComponent { ...this.state } { ...this.props } />
    }
  }
  return withScrollWatch
}
