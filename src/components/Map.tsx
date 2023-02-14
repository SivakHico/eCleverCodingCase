import { React, useEffect, useState } from 'react'
import { getCountries, addCountry, updateTodo, deleteTodo } from '../API'
import markerIconPng from 'leaflet/dist/images/marker-icon.png'
import { Icon } from 'leaflet'
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet'
import '../App.css'
import { map } from 'leaflet'

function Map() {
  const [xxx, setXXX] = useState<ICountry[]>([])

  useEffect(() => {
    getCountries()
      .then(({ data: item }: ICountry[] | any) => setXXX(item))
      .catch((err: Error) => console.log(err))
  }, [])

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
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {xxx.map((country: ICountry) => (
          <Marker
            position={[
              country.latitude ? country.latitude : (country.latitude = 0),
              country.longitude ? country.longitude : (country.longitude = 0),
            ]}
            icon={
              new Icon({
                iconUrl: markerIconPng,
                iconSize: [30, 30],
                iconAnchor: [12, 41],
              })
            }
          >
            <Popup>{country.latitude}</Popup>
            <input
              className="colorpicker"
              type="color"
              id="colorpicker"
              value="#0000ff"
            ></input>
          </Marker>
        ))}

        <ChangeView />
      </MapContainer>
    </div>
  )
}

export default Map
