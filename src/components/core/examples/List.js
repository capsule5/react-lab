import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import TransitionGroup from "react-transition-group/TransitionGroup"
import ExampleAnimated from "./example/ExampleAnimated"


class List extends PureComponent {
  state = { }

  componentWillMount() {
    console.log("[stab]", "LIST")
  }

  render() {
    return (
      <TransitionGroup>
        {
          this.props.examples.map((ex) => {
            const { component, ...moreData } = ex
            return (
              <ExampleAnimated key={ ex.id }>
                <ex.component data={ moreData } />
              </ExampleAnimated>
            )
          })
        }
      </TransitionGroup>
    )
  }
}


List.propTypes = {
  examples: PropTypes.array.isRequired,
}


export default List

