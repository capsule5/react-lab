import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import TransitionGroup from "react-transition-group/TransitionGroup"
import ExampleAnimated from "./ExampleAnimated"
import withExamples from "../withExamples"


class List extends PureComponent {
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


export default withExamples(List)

