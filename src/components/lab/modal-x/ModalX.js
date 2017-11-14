import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import Example from "components/core/examples/example/Example"
import Modal from "./Modal"

class ModalX extends PureComponent {
  constructor(props) {
    super(props)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.state = {
      isMounted: false,
    }
  }
  openModal() {
    this.setState({ isMounted: true })
  }
  closeModal() {
    this.setState({ isMounted: false })
  }

  render() {
    return (
      <Example data={ this.props.data }>
        <button onClick={ this.openModal }>open modal</button>
        <Modal isMounted={ this.state.isMounted } closeModal={ this.closeModal }>Test</Modal>
      </Example>
    )
  }
}

ModalX.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ModalX
