import React, { Component } from "react"
import PropTypes from "prop-types"

export default class Container extends Component {
  state = {
    items: [],
  }

  render() {
    return (
      <div>
        <div>
          <button
            onClick={ () => this.setState({ items: [ 1, 2, 3, 4, 5, 6, 7, 8 ] }) }
            hidden={ !!this.state.items.length }
          >
          enter animation
          </button>
          <button
            onClick={ () => this.setState({ items: [] }) }
            hidden={ !this.state.items.length }
          >
          exit animation
          </button>
        </div>
        <div>
          {React.cloneElement(this.props.children, { items: this.state.items })}
        </div>
      </div>
    )
  }
}

Container.propTypes = {
  children: PropTypes.any.isRequired,
}
