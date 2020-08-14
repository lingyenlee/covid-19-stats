import React, { useState } from 'react'
import './mapStyle.css'
import { Map, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import { useQuery } from '@apollo/react-hooks';
import { GET_COVID_DATA } from './GetData'


const MapView = () => {

    const [activeCountry, setActiveCountry] = useState(null)
    const { data, loading, error } = useQuery(GET_COVID_DATA);
    const zoom = 2

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Looks like we've got a problem...</p>;

    return (
        <Map
            id="mapId"
            center={[0, 0]}
            zoom={zoom}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />

            {data.countries.map(item => (
                <CircleMarker

                    weight={0}
                    radius={Math.log(item.cases / 10)}
                    key={item.country}
                    fillColor='red'
                    fillOpacity={0.5}
                    center={[item.countryInfo.lat, item.countryInfo.long]}
                    onClick={() => setActiveCountry(item)}
                />
            ))}

            {activeCountry && (
                <Popup
                    position={[
                        activeCountry.countryInfo.lat,
                        activeCountry.countryInfo.long
                    ]}
                    onClose={() => {
                        setActiveCountry(null)
                    }}
                >
                    <div>
                        <h2> {activeCountry.country}</h2>
                        <p>Active cases: {activeCountry.cases}</p>
                        <p>Deaths: {activeCountry.deaths}</p>
                        <p>Recovered: {activeCountry.recovered}</p>
                    </div>
                </Popup>
            )}
        </Map>
    );

}

export default MapView
