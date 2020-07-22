import React, {useEffect, useState} from 'react'
import GoogleMapReact from 'google-map-react'
import { GOOGLE_MAP_API_KEY } from '../consts/consts'
import LocationPin from './LocationPin'
import mapStyles from './mapStyles'
import Spinner from './Spinner'

const createMapOptions = (maps) => {
    return {
      fullscreenControl: false
    }
  }

function MapSection({ zoomLevel, moviesList:{movies,loading}, marker }) {
    const [locationWithLatLong, setLocationWithLatLong] = useState(null);
    const [show, setShow] = useState(false);
    let locatlLocation;
    let locationPins;

    console.log(movies)

    useEffect(() => {
        if(movies != undefined) setLocationWithLatLong(movies[0])
    }, [movies]);

    if(locationWithLatLong != undefined) { 
        const addressInfo = locationWithLatLong["addressInfo"];
        locatlLocation = {
            lat:addressInfo["lat"],
            lng:addressInfo["lng"]
        }
        zoomLevel= 10;
    };

    const handlerMarker = (e) => {
        setShow(!show);
        const pin = document.getElementById("pin-"+e);
        pin.classList.toggle("active");
        const close = pin.querySelector(".close");
        
        close.addEventListener('click', () => {
            pin.classList.remove("active");
        });
    }
    
    if(movies!= undefined && movies.length > 0) {
        locationPins = movies.map((mv, i) => {
            const addressInfo = mv.addressInfo;
            return (
            <LocationPin key={i} id={i} lat={addressInfo.lat} lng={addressInfo.lng} marker ={marker} details={[mv.title,mv.locations]}/>)
            
        });
    }

    return (
        <div className="map-block">
            <div className="google-map">
            {!loading && locatlLocation ? (
            <>
        <GoogleMapReact
                bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY, disableDefaultUI: true }}
                center={locatlLocation}
                defaultZoom={zoomLevel}
                options={createMapOptions}
                styles={mapStyles}
                onChildClick ={(e => handlerMarker(e))}
            >
                {locationPins}
            </GoogleMapReact></>): <Spinner />}
            </div>
        </div>
    )
}

export default MapSection
