import React from 'react'

const LocationPin = ({ marker, id, details }) => (
    <div className="pin" id={`pin-${id}`}>
      <img src={marker} alt="" width="16" height="16"/>
      <div className="info-window">
        <span className="close">X</span>
        <b>Movie Title :- {details[0]}</b> <br/>
        <b>Address :- </b> {details[1]} <br/><br/>
        <span className="btn-primary details-btn">Show movie</span>
      </div>
    </div>
  )

export default LocationPin
