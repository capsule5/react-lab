import React from "react"
import PropTypes from "prop-types"
import { Route } from "react-router-dom"
import { EXAMPLES_URL } from "api/examples"
import List from "./list/List"


const ExamplesRouter = ({ examples }) => (
  <div>
    {
      examples.map((ex) => {
        const { component, ...moreData } = ex
        return (
          <Route
            key={ ex.id }
            path={ ex.path }
            component={ () => <ex.component data={ moreData } /> }
          />
        )
      })
    }
    <Route
      path={ `${EXAMPLES_URL}all` }
      component={ List }
    />
  </div>
)

ExamplesRouter.propTypes = {
  examples: PropTypes.array.isRequired,
}

export default ExamplesRouter
