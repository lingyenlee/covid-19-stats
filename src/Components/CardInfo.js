import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/react-hooks';
import { GET_SUMMARY_DATA } from './GetData'
import { numberWithCommas } from '../utils/helpers'
import { useLoadingEffect } from '../context/LoadingContext'

const CardInfo = (props) => {

    const { data, error, loading } = useQuery(GET_SUMMARY_DATA);
    const [countryData, setCountryData] = useState([])

    useLoadingEffect(loading)

    useEffect(() => {
        if (data)
            if (props.country) {
                setCountryData(data.summary.countries.filter(item => item.Country_Region === props.country))
            } else {
                let arr = []
                arr.push(data.summary.globalData)
                setCountryData(arr)
            }
        return
    }, [data, props.country])

    if (error) return <p>Looks like we've got a problem...</p>
    if (loading && !data) return null

    return (

        <>
            {data && countryData.map((item, i) => (
                <div key={i}>
                    <div className="card-wrapper grid-3">
                        <div className="card card-red">
                            <span> <i className="fas fa-plus-circle"></i> {numberWithCommas(item.NewConfirmed)} today</span>
                            <span role="img" aria-label="mask-face" className="mask-face">😷</span>
                            <h2>Active: {numberWithCommas(item.Active)}</h2>
                        </div>
                        <div className="card card-black">
                            <span><i className="fas fa-plus-circle"></i> {numberWithCommas(item.NewDeaths)} today</span>
                            <span role="img" aria-label="coffin" className="coffin">⚰️</span>
                            <h2>Deaths: {numberWithCommas(item.Deaths)}</h2>
                        </div>
                        <div className="card card-green">
                            <span><i className="fas fa-plus-circle"></i> {numberWithCommas(item.NewRecovered)} today</span>
                            <span role="img" aria-label="smiley" className="smiley">🙂</span>
                            <h2>Recovered: {numberWithCommas(item.Recovered)} </h2>
                        </div>
                    </div>
                    <p>Last updated at: {item.Last_Update}</p>
                </div>
            )
            )}
        </>

    )
}

export default CardInfo
