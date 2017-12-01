import React from "react"
import PropTypes from "prop-types"
import { Route, Redirect, Switch } from "react-router-dom"
import { EXAMPLES_URL } from "api/examples"
import List from "./List"


const ExamplesRouter = ({ examples }) => (
  <Switch>
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
      path={ `${EXAMPLES_URL}list` }
      component={ List }
    />
    <Redirect to="/examples/list" />
  </Switch>
)

ExamplesRouter.propTypes = {
  examples: PropTypes.array.isRequired,
}

export default ExamplesRouter
