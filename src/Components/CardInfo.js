import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { GET_COVID_DATA } from './GetData'
import { numberWithCommas } from '../utils/helpers'

const CardInfo = () => {

    const { data, loading, error } = useQuery(GET_COVID_DATA);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Looks like we've got a problem...</p>;



    const totalActiveCases = data.countries.reduce((acc, curr) => { return acc + curr.active }, 0)
    const totalCases = data.countries.reduce((acc, curr) => { return acc + curr.cases }, 0)
    const totalTodayCases = data.countries.reduce((acc, curr) => { return acc + curr.todayCases }, 0)

    console.log(totalTodayCases)

    const totalDeaths = data.countries.reduce((acc, curr) => { return acc + curr.deaths }, 0)
    const totalRecovery = data.countries.reduce((acc, curr) => { return acc + curr.recovered }, 0)

    return (
        <>
            <div className="card-wrapper grid-3">
                <div className="card">
                    <i class="fas fa-clinic-medical"></i>
                    <h2>Active: {numberWithCommas(totalActiveCases)}</h2>
                    <h5>Total to date: {numberWithCommas(totalCases)}</h5>
                </div>
                <div className="card">
                    <i class="fas fa-skull-crossbones"></i>
                    <h2>Deaths: {numberWithCommas(totalDeaths)}</h2>
                </div>
                <div className="card">
                <i class="fas fa-heartbeat"></i>
                    <h2>Recovered: {numberWithCommas(totalRecovery)} </h2>
                </div>

            </div>
        </>
    )
}

export default CardInfo
