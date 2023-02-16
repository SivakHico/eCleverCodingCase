import { useEffect, useState } from 'react'
import { getCountries } from '../API'
import { divIcon } from 'leaflet'
import '../App.css'
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
  const [Countriii, setCountry] = useState<ICountry[]>([])
  const [color, setColor] = useState<string>('#ff0000')
  const [active, setActive] = useState(-1)

  useEffect(() => {
    getCountries()
      .then(({ data: item }: ICountry[] | any) => setCountry(item))
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
        {Countriii.map((country: ICountry, index) => (
          <Marker
            position={[
              country.latitude ? country.latitude : (country.latitude = 0),
              country.longitude ? country.longitude : (country.longitude = 0),
            ]}
            icon={divIcon({
              className: '',
              iconSize: [32, 32],
              popupAnchor: [0, -20],
              html: `<div class="customIcon"><i style=color:${
                active === index ? color : 'blue'
              } class="fas fa-square"></i></div>`,
            })}
          >
            <Popup>
              <h4>Welcome to {country.name}</h4>
              <h6 className="change-color-h6">Change the color</h6>
              <input
                className="change-color"
                type="color"
                onChange={(e) => setColor(e.target.value)}
                value={color}
              />
            </Popup>
          </Marker>
        ))}
        <ChangeView />
      </MapContainer>
    </div>
  )
}

export default Map
