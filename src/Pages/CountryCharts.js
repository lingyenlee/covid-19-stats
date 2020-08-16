import React, { useState, useEffect } from 'react'
import CountrySelect from '../Components/CountrySelect'
import { GET_COUNTRIES_DATA } from '../Components/GetData'
import { useQuery } from '@apollo/react-hooks';
import CasesOverTime from '../Components/Charts/CasesOverTime';

const CountryCharts = () => {

    const [country, setCountry] = useState('')
    const [confirmed, setConfirmed] = useState([])
    const [deaths, setDeaths] = useState([])
    const [recovered, setRecovered] = useState([])
    const [timeline, setTimeline] = useState([])

    const { data } = useQuery(GET_COUNTRIES_DATA, { variables: { country: country } });
    if (data) console.log(data)

    // useEffect(()=> {
    //     if (data) 

    // })



    return (
        <div>
            <CountrySelect
                value={country}
                onSelect={setCountry}
            />
            {data && data.timelineCountry.map(item => (
                <CasesOverTime
                    confirmed={item.Confirmed}
                    timeline={item.Date}
                />
            ))}

        </div>
    )
}

export default CountryCharts
