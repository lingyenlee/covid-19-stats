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

export const GET_COUNTRIES_LOCAITON = gql`{
 Country {
    alpha2Code
    location {
      latitude
      longitude
    }
  }
}`

export const COUNTRIES_DATA = gql`
  query country ($country: ID!){
    country(country: $country) {
      Summary {
        Country_Region
        NewConfirmed
      }
    }
  }
`

// export const COUNTRIES_CARD_DATA = gql`{
//     countries {
//       country
//       cases
//       deaths
//       recovered
//       todayCases
//       todayDeaths
//       active
//     }
//  }`

