// See src/index.js for <ApolloProvider client={ client }>
// to start server : $ node ./src/index.js
// graphiql: http://localhost:3002/graphiql
// add a link : http://localhost:3002/graphiql?variables=null&query=mutation%7B%0A%20%20createLink(%0A%20%20%20%20url%3A%22http%3A%2F%2Ftest.com%22%2C%0A%20%20%20%20description%3A%22blabla%22%0A%20%20)%7B%0A%20%20%20%20id%0A%20%20%20%20url%0A%20%20%20%20description%0A%20%20%7D%0A%7D

import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Example from "components/core/examples/example/Example"
import { graphql } from "react-apollo"
import gql from "graphql-tag"

const Wrapper = styled.div`
  .graphql-links{ color:violet}
  .graphql-bash{background:#EEE;  padding:5px; font-size:12px;}
  .graphql-misc{
    font-size:12px;
    a{ color:#000; display:block}
  }
`

class GraphQL extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderLinks() {
    // loading
    if (this.props.allLinksQuery && this.props.allLinksQuery.loading) {
      return <div>Loading</div>
    }
  
    // error
    if (this.props.allLinksQuery && this.props.allLinksQuery.error) {
      return <div> Error - start server <span className="graphql-bash">$ node ./src/index.js</span> </div>
    }

    // ok
    return (<ul>
      {
        this.props.allLinksQuery && this.props.allLinksQuery.allLinks && this.props.allLinksQuery.allLinks.map(link => (
          <li key={ link.description }>#{link.id} {link.description}</li>
        ))
      }
    </ul>)
  }

  render() {
    return (
      <Example data={ this.props.data }>
        <Wrapper>
          <p>Links from API:</p>
          <div className="graphql-links">{ this.renderLinks()}</div>
          <div className="graphql-misc">
            <p>---</p>
            <a href="http://localhost:3002/graphiql">graphiql</a>
            <a href="http://localhost:3002/graphiql?variables=null&query=mutation%7B%0A%20%20createLink(%0A%20%20%20%20url%3A%22http%3A%2F%2Ftest.com%22%2C%0A%20%20%20%20description%3A%22blabla%22%0A%20%20)%7B%0A%20%20%20%20id%0A%20%20%20%20url%0A%20%20%20%20description%0A%20%20%7D%0A%7D">add a link mutation</a>
          </div>
        </Wrapper>
      </Example>
    )
  }
}

GraphQL.defaultProps = {
  allLinksQuery: null,
}

GraphQL.propTypes = {
  data: PropTypes.object.isRequired,
  allLinksQuery: PropTypes.any,
}


const ALL_LINKS_QUERY = gql`
query AllLinksQuery {
  allLinks {
    id
    url
    description
  }
}
`

export default graphql(ALL_LINKS_QUERY, { name: "allLinksQuery" })(GraphQL)
