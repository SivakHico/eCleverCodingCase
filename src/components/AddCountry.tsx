import React, { useState } from 'react'
import '../App.css'

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
      <form
        className="Form"
        onSubmit={(e) => saveCountry(e, formData)}
      >
        <div className="dis-flex">
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
          type="submit"
          className="add-country"
          disabled={formData === undefined ? true : false}
        >
          Add Content
        </button>
        <hr />
      </form>
    </>
  )
}

export default AddCountry
