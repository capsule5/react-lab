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
import { compose } from "utils/helpers"

// Styles
const Wrapper = styled.div`
  p{ margin-top:0;}
  .graphql-links{
    li{ margin-bottom:5px;}
    a{ color:violet;}
    color:violet
  }
  .graphql-bash{background:#EEE;  padding:5px; font-size:12px;}
  .graphql-note{ font-size: 12px;}
`

// Seeds
const LINK_SEEDS = [
  {
    url: "http://localhost:3002/graphiql",
    description: "Visit GraphiQL at localhost:3002/graphiql",
  },
  {
    url: "http://localhost:3002/graphiql?variables=null&query=mutation%7B%0A%20%20createLink(%0A%20%20%20%20url%3A%22http%3A%2F%2Ftest.com%22%2C%0A%20%20%20%20description%3A%22blabla%22%0A%20%20)%7B%0A%20%20%20%20id%0A%20%20%20%20url%0A%20%20%20%20description%0A%20%20%7D%0A%7D",
    description: "Try this mutation to add a link",
  },
]

// GraphQL
const ALL_LINKS_QUERY = gql`
query AllLinksQuery {
  allLinks {
    id
    url
    description
  }
}
`
const CREATE_LINK_MUTATION = gql`
  mutation CreateLinkMutation($description: String!, $url: String!) {
    createLink(
      description: $description,
      url: $url,
    ) {
      url
      description
    }
  }
`

const DELETE_LINK_MUTATION = gql`
  mutation DeleteLinkMutation($id: ID!) {
    deleteLink(
      id: $id
    ) {
      id
    }
  }
`

class GraphQL extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
    this.createLink = this.createLink.bind(this)
    this.deleteLink = this.deleteLink.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const linksQuery = nextProps.allLinksQuery
    if (linksQuery && linksQuery.allLinks) {
      if (linksQuery.allLinks.length === 0) {
        this.seedDB()
      }
    }
  }

  seedDB() {
    LINK_SEEDS.map(link => this.createLink(link.description, link.url))
  }

  createLink(description, url) {
    this.props.createLinkMutation({
      variables: {
        description,
        url,
      },
      refetchQueries: [ { query: ALL_LINKS_QUERY } ], // allows quick sync with db
    })
  }

  deleteLink(id) {
    this.props.deleteLinkMutation({
      variables: {
        id,
      },
      refetchQueries: [ { query: ALL_LINKS_QUERY } ],
    })

    // this.props.allLinksQuery.refetch()
  }

  renderLinks() {
    const { allLinksQuery } = this.props

    if (allLinksQuery) {
      // loading
      if (allLinksQuery.loading) {
        return <div>Loading</div>
      }

      // error
      if (allLinksQuery.error) {
        return <div> Error - start API server in /api <span className="graphql-bash">$ node ./src/index.js</span> </div>
      }

      // ok
      return (<ul>
        {
          allLinksQuery.allLinks && allLinksQuery.allLinks.map(link => (
            <li key={ link.url }>
              <a href={ link.url }>{link.description}</a>
              <button onClick={ () => {
                this.deleteLink(link.id)
              } }
              >delete</button>
            </li>
          ))
        }
      </ul>)
    }

    return null
  }

  render() {
    const { allLinksQuery } = this.props

    return (
      <Example data={ this.props.data }>
        <Wrapper>
          <p>A list of links:</p>
          <div className="graphql-links">{ this.renderLinks()}</div>
          {
            allLinksQuery.allLinks &&
            <div className="graphql-note">
              In this example, DB will be automatically seeded with seedDB() if links collection is empty
            </div>
          }
        </Wrapper>
      </Example>
    )
  }
}

GraphQL.propTypes = {
  data: PropTypes.object.isRequired,
  allLinksQuery: PropTypes.any.isRequired,
  createLinkMutation: PropTypes.any.isRequired,
  deleteLinkMutation: PropTypes.any.isRequired,
}

export default compose(
  graphql(ALL_LINKS_QUERY, { name: "allLinksQuery", options: { pollInterval: 5000 } }), // pollInterval refetch the query every 5s
  graphql(CREATE_LINK_MUTATION, { name: "createLinkMutation" }),
  graphql(DELETE_LINK_MUTATION, { name: "deleteLinkMutation" }),
)(GraphQL)
