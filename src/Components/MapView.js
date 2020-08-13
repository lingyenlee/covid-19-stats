import React from 'react'
import './mapStyle.css'
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// import Markers from './VenueMarkers'

const MapView = () => {

    //const stamenTonerTiles = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png';
    //const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

    const location = { lat: 0, lng: 0 }
    const zoom = 2

    return (
        <Map
            id="mapId"
            center={location}
            zoom={zoom}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />

        </Map>
    );

}

export default MapView
