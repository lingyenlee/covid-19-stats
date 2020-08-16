import React, { useState, useEffect } from 'react'
import CountrySelect from '../Components/CountrySelect'
import { GET_COUNTRIES_DATA } from '../Components/GetData'
import { useQuery } from '@apollo/react-hooks';
import CasesOverTime from '../Components/Charts/CasesOverTime';
import CardInfo from '../Components/CardInfo';

const CountryCharts = () => {

    const [country, setCountry] = useState('')
    const [confirmed, setConfirmed] = useState([])
    const [deaths, setDeaths] = useState([])
    const [recovered, setRecovered] = useState([])
    const [timeline, setTimeline] = useState([])

    const { data } = useQuery(GET_COUNTRIES_DATA, { variables: { country: country } });

    useEffect(() => {
        if (data) setConfirmed(data.timelineCountry.map(item => item.Confirmed))
        if (data) setDeaths(data.timelineCountry.map(item => item.Deaths))
        if (data) setRecovered(data.timelineCountry.map(item => item.Recovered))
        if (data) setTimeline(data.timelineCountry.map(item => item.Date))

    }, [data])


    return (
        <div>
            <CountrySelect
                value={country ? country : ''}
                onSelect={setCountry}
            />
            {country ? <CardInfo country={country} /> : <CardInfo />}

            <CasesOverTime
                color='#FF0000'
                text='Cases Over Time'
                cases={confirmed}
                date={timeline}
            />

            <CasesOverTime
                color='#000000'
                text='Deaths over Time'
                cases={deaths}
                date={timeline}
            />

            <CasesOverTime
                color='#228B22'
                text='Recovered over Time'
                cases={recovered}
                date={timeline}
            />

        </div>
    )
}

export default CountryCharts
