// import React from 'react'
// import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

export const GET_COVID_DATA = gql`{
    countries {
        countryInfo {
          lat
          long
        }
        country 
        cases
        deaths
        recovered
      }
}`