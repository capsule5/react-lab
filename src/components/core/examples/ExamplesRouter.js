import React from "react"
import PropTypes from "prop-types"
import { Switch, Route, Redirect } from "react-router-dom"
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
      path={ `${EXAMPLES_URL}all` }
      component={ () => <List examples={ examples } /> }
    />
    <Redirect from="/" to="/examples/all" />
  </Switch>
)

ExamplesRouter.propTypes = {
  examples: PropTypes.array.isRequired,
}

export default ExamplesRouter
