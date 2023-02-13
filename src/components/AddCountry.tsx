import React, { useState } from 'react'

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
    <form
      className="Form"
      onSubmit={(e) => saveCountry(e, formData)}
    >
      <div>
        <div>
          <label htmlFor="country">Country</label>
          <input
            onChange={handleForm}
            type="text"
            id="country"
          />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={handleForm}
            type="text"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="latitude">Latitude</label>
          <input
            onChange={handleForm}
            type="number"
            id="latitude"
          />
        </div>
        <div>
          <label htmlFor="longitude">Longitude</label>
          <input
            onChange={handleForm}
            type="number"
            id="longitude"
          />
        </div>
      </div>
      <button disabled={formData === undefined ? true : false}>
        Add Country
      </button>
    </form>
  )
}

export default AddCountry
