import React from "react"
import PropTypes from "prop-types"

const List = ({ examples }) => (
  <div>
    {
      examples.map((ex) => {
        const { component, ...moreData } = ex
        return (
          <ex.component key={ ex.id } data={ moreData } />
        )
      })
    }
  </div>
)

List.propTypes = {
  examples: PropTypes.array.isRequired,
}


export default List

