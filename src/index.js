import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient from "apollo-client";
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { LoadingProvider } from './context/LoadingContext'
// import { ApolloLink } from 'apollo-boost'

//create a new instance of cache
const cache = new InMemoryCache()
//create an instane of httplink
const link = new HttpLink({
  uri: "https://api-corona.azurewebsites.net/graphql",
  credentials: 'same-origin'
})

// const countryLink = new HttpLink({
//   uri: "https://countries-274616.ew.r.appspot.com",
//   credentials: "same-origin"
// })
//create a new instance of apolloclient and provide the cache and link instances
const client = new ApolloClient({
  link,
  cache
})

// const client = new ApolloClient({
//   link: ApolloLink.split(
//     operation => operation.getContext().clientName === 'country-link',
//     countryLink, // apollo will send to this link if clientName is 'country-location'
//     covidLink
//   ),
//   cache
// })


//wrap the root App with ApolloProvice
ReactDOM.render(
  <ApolloProvider client={client}>
    <LoadingProvider>
      <App />
    </LoadingProvider>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
