import React, { Component } from "react"
import { EXAMPLES } from "api/examples"


export default (WrappedComponent) => {
  class withLiveSearch extends Component {
    constructor(props) {
      super(props)
      this.state = {
        results: [],
        isActive: false,
      }
      this.onChange = this.onChange.bind(this)
      this.onBlur = this.onBlur.bind(this)
      this.onFocus = this.onFocus.bind(this)
      this.onIconClick = this.onIconClick.bind(this)
    }

    componentWillUnmount() {
      clearTimeout(this.to)
    }

    onChange(e) {
      this.searchFor(e.target.value)
    }

    onFocus(e) {
      this.searchFor(e.target.value)
    }

    onBlur() {
      this.to = setTimeout(() => {
        this.setState({ isActive: false })
        this.setResults({ examplesResults: [] })
      }, 200)
    }

    onIconClick() {
      this.setState({ isActive: true })
    }

    searchFor(value) {
      // console.log("[stab]", { value })
      const examplesResults = EXAMPLES
        .filter(e => e.title.match(new RegExp(value, "gi")))

      if (value.length) {
        this.setResults({ examplesResults })
      } else {
        this.setResults({ examplesResults: [] })
      }
    }

    setResults({ examplesResults }) {
      // console.log("[stab]", { examplesResults })
      this.setState({
        results: [ ...examplesResults ],
      })
    }

    render() {
      return (
        <WrappedComponent
          { ...this.props }
          onChange={ this.onChange }
          onBlur={ this.onBlur }
          onFocus={ this.onFocus }
          results={ this.state.results }
          onIconClick={ this.onIconClick }
          isActive={ this.state.isActive }
        />
      )
    }
  }
  
  return withLiveSearch
}

