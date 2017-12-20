import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Example from "components/core/examples/example/Example"
import { InstantSearch, SearchBox, Hits } from "react-instantsearch/dom"

const Wrapper = styled.div`
  
`

class AlgoliaSearch extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Example data={ this.props.data }>
        <Wrapper>
          <InstantSearch
            appId="latency"
            apiKey="3d9875e51fbd20c7754e65422f7ce5e1"
            indexName="bestbuy"
          >
            <SearchBox />
            <Hits />
          </InstantSearch>
        </Wrapper>
      </Example>
    )
  }
}

AlgoliaSearch.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AlgoliaSearch
