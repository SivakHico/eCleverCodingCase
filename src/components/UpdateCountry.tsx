import React from 'react'

type Props = CountryProps & {
  updateCountry: (countri: ICountry) => void
  deleteCountry: (_id: string) => void
}

const Update: React.FC<Props> = ({ countri, updateCountry, deleteCountry }) => {
  const checkCountri: string = countri.status ? `line-through` : ''
  return (
    <div className="Card">
      <div className="Card--text">
        <div className={checkCountri}>{countri.country}</div>
        <div className={checkCountri}>{countri.name}</div>
      </div>
      <div className="Card--button">
        <button
          onClick={() => updateCountry(countri)}
          className={countri.status ? `hide-button` : 'Card--button__done edit-capital'}
        >
          Edit
        </button>
        <button
          onClick={() => deleteCountry(countri._id)}
          className="Card--button__delete delete-capital"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default Update
