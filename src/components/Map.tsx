import React from 'react'
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet'
import '../App.css'

function Map() {
  function ChangeView() {
    const map = useMapEvents({
      click(e) {
        console.log(e.latlng.lng)
        console.log(e.latlng.lat)
      },
    })
  }

  return (
    <div className="map">
      <MapContainer
        center={[48, 20]}
        zoom={5}
        scrollWheelZoom={true}
      >
        <ChangeView />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map
