import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

export const MapComponent = ({ positionDefault, onClickPosition, position }) => {
  const handleClick = (e) => {
    onClickPosition(e.latlng)
  }

  return (
    <Map center={positionDefault} zoom={10} style={{ height: '100%' }} onClick={handleClick}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>This is your marker<br />Easily customizable.</Popup>
      </Marker>
    </Map>
  )
}
