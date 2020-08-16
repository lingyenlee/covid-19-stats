import React from 'react'
import CardInfo from '../Components/CardInfo';
import Header from '../Components/Header';
import CountryCharts from './CountryCharts';


const Dashboard = () => {
    return (
        <>
            <Header />
            <CardInfo />
            <CountryCharts />
        </>
    )
}

export default Dashboard
