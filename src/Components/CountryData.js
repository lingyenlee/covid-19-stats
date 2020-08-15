// import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { GET_COUNTRIES_LOCAITON } from './GetData'

const CountryData = () => {

    const { data } = useQuery(GET_COUNTRIES_LOCAITON, { context: { clientName: 'country-link' } });
    let countryData = []
    if (data) {countryData =  data.Country}
    return countryData
}

export default CountryData
