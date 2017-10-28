import React from "react"
import PropTypes from "prop-types"
import { Switch, Route } from "react-router-dom"

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
  </Switch>
)

ExamplesRouter.propTypes = {
  examples: PropTypes.array.isRequired,
}

export default ExamplesRouter
