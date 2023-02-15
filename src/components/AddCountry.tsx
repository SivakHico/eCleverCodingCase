import React, { useState } from 'react'
import '../App.css'
import '../js/collapsible.js'

type Props = {
  saveCountry: (e: React.FormEvent, formData: ICountry | any) => void
}

const AddCountry: React.FC<Props> = ({ saveCountry }) => {
  const [formData, setFormData] = useState<ICountry | {}>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  return (
    <>
      <button className="collapsible">Add new Location</button>
      <form
        className="Form content"
        onSubmit={(e) => saveCountry(e, formData)}
      >
        <div>
          <div>
            <label htmlFor="country">Country</label>
            <input
              className="input"
              onChange={handleForm}
              type="text"
              id="country"
            />
          </div>
          <div>
            <label htmlFor="name">Name</label>
            <input
              className="input"
              onChange={handleForm}
              type="text"
              id="name"
            />
          </div>
          <div>
            <label htmlFor="latitude">Latitude</label>
            <input
              className="input"
              onChange={handleForm}
              type="number"
              id="latitude"
            />
          </div>
          <div>
            <label htmlFor="longitude">Longitude</label>
            <input
              className="input"
              onChange={handleForm}
              type="number"
              id="longitude"
            />
          </div>
        </div>
        <button
          className="add-country"
          disabled={formData === undefined ? true : false}
        >
          Add Country
        </button>
      </form>
    </>
  )
}

export default AddCountry
