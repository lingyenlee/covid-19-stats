import React from 'react'
import Chart from 'react-apexcharts'


const CasesOverTime = (props) => {

    const options = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        title: {
            text: props.text,
            align: 'center'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        xaxis: {
            categories: props.date,
        },
        colors: [props.color]
    }


    const series = [{
        name: props.text,
        data: props.cases
    }]


    return (
        <div>
            <Chart options={options} series={series} type="line" height={350} />
        </div>
    )
}

export default CasesOverTime
