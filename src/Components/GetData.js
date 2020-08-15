// import React from 'react'
// import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

export const GET_SUMMARY_DATA = gql`{
 summary {
    globalData {
      Confirmed
      Deaths
      Recovered
      Active
      NewConfirmed
      NewDeaths
      NewRecovered
      Last_Update
    }
  }
}`

export const GET_COUNTRIES_CONFIRMED = gql`{
  summary {
    countries {
     Country_Region
     Confirmed
     NewConfirmed
    }
  }
}`

