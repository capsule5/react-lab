import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"

import { ApolloProvider } from "react-apollo"
import { ApolloClient } from "apollo-client"
// import { HttpLink } from "apollo-link-http"
import { createUploadLink } from "apollo-upload-client/lib/main"
// import { createHttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"

import App from "./components/core/App"
import registerServiceWorker from "./registerServiceWorker"
import configStore from "./redux/configStore"
import "./index.css"


const client = new ApolloClient({
  link: createUploadLink({ uri: "http://localhost:3002/graphql" }),
  cache: new InMemoryCache(),
})

const store = configStore()

ReactDOM.render((
  <ApolloProvider client={ client }>
    <Provider store={ store }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>
), document.getElementById("root"))
registerServiceWorker()
