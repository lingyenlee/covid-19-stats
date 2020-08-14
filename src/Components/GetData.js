// import React from 'react'
// import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

export const GET_COUNTRIES_DATA = gql`{
    countries {
        countryInfo {
          lat
          long
        }
        country 
        deaths
        cases
        recovered
      }
}`

export const GET_COVID_DATA = gql`{
    countries {
      country
      cases
      deaths
      recovered
      todayCases
      todayDeaths
      active
    }
 }`