import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import TransitionGroup from "react-transition-group/TransitionGroup"
import ItemAnimated from "./ItemAnimated"
import withExamples from "./withExamples"


class List extends PureComponent {
  render() {
    return (
      <TransitionGroup>
        {
          this.props.examples.map((ex) => {
            const { component, ...moreData } = ex
            return (
              <ItemAnimated key={ ex.id }>
                <ex.component data={ moreData } />
              </ItemAnimated>
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

