import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { GET_SUMMARY_DATA } from './GetData'
import { numberWithCommas } from '../utils/helpers'
import { useLoadingEffect } from '../context/LoadingContext'

const Header = () => {

    // const [totalCases, setTotalCases] = useState(0)
    const { data, error, loading } = useQuery(GET_SUMMARY_DATA);

    useLoadingEffect(loading)
    if (loading) return <p>Loading...</p>
    if (error) return <p>Looks like we've got a problem...</p>
    if (!data) return <p>Not found</p>;

    return (
        <div>
            <h5>Global cases to date: {data.summary && numberWithCommas(data.summary.globalData.Confirmed)} </h5>
        </div>
    )

}

export default Header
