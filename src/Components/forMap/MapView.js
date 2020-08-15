// import React, { useState } from 'react'
// // import { Query } from "react-apollo";
// //import {customClient} from '../index';
// import { Map, TileLayer, CircleMarker, Popup } from 'react-leaflet';
// import { useQuery } from '@apollo/react-hooks';
// import countryData from './CountryData'
// import { COUNTRIES_DATA } from './GetData'
// import { numberWithCommas } from '../utils/helpers'
// import MapCircleMarker from './MapCircleMarker'
// import { Query } from 'react-apollo';



// const MapView = () => {

//     const [activeCountry, setActiveCountry] = useState(null)
//     // const { data } = useQuery(GET_COUNTRIES_LOCAITON, { context: { clientName: 'country-link' } });
//     //  console.log(data)
//     const zoom = 1
//     const countryLocations = countryData()
//     console.log(countryLocations)
//     // if (loading) return <p>Loading...</p>;
//     // if (error) return <p>Looks like we've got a problem...</p>;
//     // if (data) console.log(data)

//     return (
//         <Map
//             id="mapId"
//             center={[35, -40]}
//             zoom={zoom}
//         >
//             <TileLayer
//                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
//             />

//             {countryLocations.map(item =>
//                 <Query query={COUNTRIES_DATA} variables={{ country: item.alpha2Code }}>


//                     {({ loading, error, data }) => {
//                         console.log(data)
//                         if (loading) return <p>Loading...</p>;
//                         if (error) return <p>Looks like we've got a problem...</p>;

//                         return (
//                             <CircleMarker
//                                 weight={0}
//                                 radius={data.country.Summary
//                                     ? Math.sqrt(data.country.Summary.NewConfirmed)
//                                     : 0}
//                                 key={item.alpha2Code}
//                                 fillColor='red'
//                                 fillOpacity={0.5}
//                                 center={[item.location.latitude, item.location.longitude]}
//                                 onClick={() => setActiveCountry(item)}
//                             />

//                         )

//                     }}

//                 </Query>
//             )}
//             {
//                 activeCountry && (
//                     <Popup
//                         position={[
//                             activeCountry.location.latitude,
//                             activeCountry.location.longitude
//                         ]}
//                         onClose={() => {
//                             setActiveCountry(null)
//                         }}
//                     >
//                         <div className="popup-text">
//                             <h2> {activeCountry.alpha2Code}</h2>
//                             {/* <p>Total cases: {numberWithCommas(activeCountry.cases)}</p>
//                             <p>Deaths: {numberWithCommas(activeCountry.deaths)}</p>
//                             <p>Recovered: {numberWithCommas(activeCountry.recovered)}</p> */}
//                         </div>
//                     </Popup>
//                 )
//             }
//         </Map >
//     );

// }

// export default MapView
