import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Example from "components/core/examples/example/Example"
import { InstantSearch, SearchBox, InfiniteHits, RefinementList, Configure } from "react-instantsearch/dom"
import Item from "./Item"

const Wrapper = styled.div`
  
  .ais-InfiniteHits__root{
    /* display:flex;
    justify-content:space-between;
    flex-wrap: wrap; */
  }
  .bottom{
    display:flex;
    margin-top:20px;
    .aside{ 
      min-width:300px;
    }
  }
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
            <Configure hitsPerPage={ 5 } />
            <SearchBox />
            <div className="bottom">
              <div className="aside">
                <RefinementList attributeName="category" showMore="true" />
              </div>
              <div>
                <InfiniteHits hitComponent={ Item } />
              </div>
            </div>
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
