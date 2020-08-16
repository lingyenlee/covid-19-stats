// import React from 'react'
// import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

export const GET_SUMMARY_DATA = gql`{
    summary {
      globalData {
        Active
        Confirmed
        Deaths
        Recovered
        NewConfirmed
        NewDeaths
        NewRecovered
        Last_Update
      }
    countries {
      Country_Region
      Code
      Active
      Confirmed
      Recovered
      Deaths
      NewConfirmed
      NewRecovered
      NewDeaths
      Last_Update
    } 
  }
}`

export const GET_COUNTRIES_DATA = gql`
  query ($country: ID!) {
    timelineCountry(country: $country) {
      Country
      Date
      Confirmed
      Deaths
      Recovered
    }
  } 
`

export const GET_COUNTRIES = gql`{
  summary {
    countries {
      Country_Region
      Code
    }
  }
}`
