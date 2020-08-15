import React, { useState, useEffect } from 'react'
import Chart from 'react-apexcharts'
import { useQuery } from '@apollo/react-hooks';
import { GET_COUNTRIES_CONFIRMED } from './GetData'


const CountriesByTotal = () => {

    const [confirmedCases, setConfirmedCases] = useState([])
    const [newConfirmed, setNewConfirmed] = useState([])
    const [countries, setCountries] = useState([])
    const { data, error, loading } = useQuery(GET_COUNTRIES_CONFIRMED);


    useEffect(() => {
        if (data) {
            setConfirmedCases(data.summary.countries.filter(item => item.Confirmed >= 1000000))
            setNewConfirmed(data.summary.countries.filter(item => item.Confirmed >= 1000000).map(item => item.NewConfirmed))
            setCountries(data.summary.countries.filter(item => item.Confirmed >= 1000000).map(item => item.Country_Region))
        }
    }, [data])
    console.log(confirmedCases)

    const options = {
        chart: {
            type: 'bar',
            height: 1000,
            stacked: true,
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        stroke: {
            width: 1,
            colors: ['#fff']
        },
        title: {
            text: 'Cases by Countries'
        },
        xaxis: {
            categories: countries,
        },
        yaxis: {
            title: {
                text: undefined
            },
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + "K"
                }
            }
        },
        fill: {
            opacity: 1
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left',
            offsetX: 40
        }
    }

    const series = [
        {
            name: 'confirmed cases',
            data: confirmedCases
        },
        {
            name: 'New confirmed cases',
            data: newConfirmed
        },
    ]

    return (
        <div>
            <Chart options={options} series={series} type="bar" width={1000} height={5000} />
        </div>
    )
}

export default CountriesByTotal
