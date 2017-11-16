import React, { PureComponent } from "react"

const HEADER_HEIGHT = 90

export default (WrappedComponent) => {
  class withScroll extends PureComponent {
    constructor(props) {
      super(props)
      this.state = {
        scrollY: 0,
        isScrolled: false,
      }
      this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
      window.addEventListener("scroll", this.handleScroll)
    }
  
    componentWillUnmount() {
      window.removeEventListener("scroll", this.handleScroll)
    }
  
    handleScroll() {
      this.setState({
        scrollY: window.scrollY,
        isScrolled: window.scrollY > HEADER_HEIGHT,
      })
    }

    render() {
      return (
        <WrappedComponent
          scroll={ { ...this.state, headerHeight: HEADER_HEIGHT } }
        />
      )
    }
  }
  
  return withScroll
}

