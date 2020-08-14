import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { ApolloProvider } from '@apollo/react-hooks'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

//create a new instance of cache
const cache = new InMemoryCache()
//create an instane of httplink
const link = createHttpLink({
  uri: 'https://sharad-gql-covid19.herokuapp.com/graphql'
})

//create a new instance of apolloclient and provide the cache and link instances
const client = new ApolloClient({
  link,
  cache
})

//wrap the root App with ApolloProvice
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
