import React, { PureComponent } from "react"
import PropTypes from "prop-types"


export default (WrappedComponent) => {
  class withModal extends PureComponent {
    constructor(props) {
      super(props)
      this.transitionEnd = this.transitionEnd.bind(this)
      this.willEnter = this.willEnter.bind(this)
      this.willLeave = this.willLeave.bind(this)
      this.onClose = this.onClose.bind(this)
      this.state = {
        isShow: false,
        isMounted: false,
      }
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
      this.toggleBodyScroll(true)
    }
    
    willEnter() {
      this.setState({ isMounted: true })
      this.toggleBodyScroll(false)
    }
    
    transitionEnd() {
      if (!this.props.isMounted) { // remove the node on transition end when the mounted prop is false
        this.setState({ isShow: false })
      }
    }

    onClose(e) {
      e.preventDefault()
      
      const isContent = e.target.classList.contains("modal-wrapper")
      
      if (!isContent) {
        this.props.closeModal()
      }
    }

    toggleBodyScroll(isScrollable) {
      if (!isScrollable) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = null
      }
    }

    render() {
      return this.state.isShow &&
        <WrappedComponent
          { ...this.props }
          isMounted={ this.state.isMounted }
          onTransitionEnd={ this.transitionEnd }
          onClose={ this.onClose }
        />
    }
  }

  withModal.propTypes = {
    isMounted: PropTypes.bool.isRequired, // eslint-disable-line react/no-unused-prop-types
    closeModal: PropTypes.func.isRequired,
  }
  
  return withModal
}

