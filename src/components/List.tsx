import React, { useEffect, useState } from 'react'
import { getCountries, addCountry, updateCountro, deleteCountry } from '../API'
import AddCountry from '../components/AddCountry'
import UpdateCountry from '../components/UpdateCountry'
import '../App.css'

const List: React.FC = () => {
  const [countries, setCountries] = useState<ICountry[]>([])

  useEffect(() => {
    getCountries()
      .then(({ data: item }: ICountry[] | any) => setCountries(item))
      .catch((err: Error) => console.log(err))
  }, [])

  const handleSaveCountry = (e: React.FormEvent, formData: ICountry): void => {
    e.preventDefault()
    addCountry(formData)
      .then(({ data: item }: ICountry | any) => {
        setCountries([...countries, item])
        console.log('New Country added!')
        alert('New Country added!')
        ;(document.getElementById('country') as HTMLInputElement).value = ''
        ;(document.getElementById('name') as HTMLInputElement).value = ''
        ;(document.getElementById('latitude') as HTMLInputElement).value = ''
        ;(document.getElementById('longitude') as HTMLInputElement).value = ''
      })
      .catch((err: Error) => console.log(err))
  }

  const handleUpdateCountry = (countri: ICountry): void => {
    updateCountro(countri)
      .then(({ data: item }: ICountry | any) => {
        setCountries([...countries, item])
        console.log('Country updated!')
        alert('Country updated!')
      })
      .catch((err: Error) => console.log(err))
  }

  const handleDeleteCountry = (_id: string): void => {
    deleteCountry(_id)
      .then(({ data: item }: ICountry | any) => {
        setCountries([...countries, item])
        console.log('Country deleted!')
        alert('Country deleted!')
      })
      .catch((err: Error) => console.log(err))
  }

  return (
    <div className="menu">
      <h2 className="form-header">Maping all over the World</h2>
      <AddCountry saveCountry={handleSaveCountry} />

      {countries
        .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
        .map((country: ICountry) => (
          <div
            className="country-list"
            key={country._id}
          >
            <h3>{country.name}</h3>
            <UpdateCountry
              key={country._id}
              updateCountry={handleUpdateCountry}
              deleteCountry={handleDeleteCountry}
              countri={country}
            />
            <hr />
          </div>
        ))}
    </div>
  )
}

export default List
