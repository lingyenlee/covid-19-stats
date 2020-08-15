import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { GET_SUMMARY_DATA } from './GetData'
import { numberWithCommas } from '../utils/helpers'
import { useLoadingEffect } from '../context/LoadingContext'

const CardInfo = () => {

    const { data, error, loading } = useQuery(GET_SUMMARY_DATA);
    // const [, setLoading] = useLoading()
    useLoadingEffect(loading)

    // if (loading) return <p>Loading...</p>
    if (error) return <p>Looks like we've got a problem...</p>
    if (loading && !data) return null

    console.log(data)
    return (
        <>
            <div className="card-wrapper grid-3">
                <div className="card">
                    <span> <i className="fas fa-plus-circle"></i> {numberWithCommas(data.summary.globalData.NewConfirmed)} today</span>
                    <span role="img" aria-label="mask-face" className="mask-face">😷</span>
                    <h2>Active: {numberWithCommas(data.summary.globalData.Active)}</h2>
                </div>
                <div className="card">
                    <span><i className="fas fa-plus-circle"></i> {numberWithCommas(data.summary.globalData.NewDeaths)} today</span>
                    <span role="img" aria-label="coffin" className="coffin">⚰️</span>
                    <h2>Deaths: {numberWithCommas(data.summary.globalData.Deaths)}</h2>
                </div>
                <div className="card">
                    <span><i className="fas fa-plus-circle"></i> {numberWithCommas(-data.summary.globalData.NewRecovered)} today</span>
                    <span role="img" aria-label="smiley" className="smiley">🙂</span>
                    <h2>Recovered: {numberWithCommas(data.summary.globalData.Recovered)} </h2>
                </div>
            </div>
            <p>Last updated at: {data.summary.globalData.Last_Update}</p>
        </>
    )
}

export default CardInfo
