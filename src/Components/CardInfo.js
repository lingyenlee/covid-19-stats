import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { GET_COVID_DATA } from './GetData'

const CardInfo = () => {

    const { data, loading, error } = useQuery(GET_COVID_DATA);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Looks like we've got a problem...</p>;

    

    return (
        <>
            <div className="card">

            </div>
        </>
    )
}

export default CardInfo
