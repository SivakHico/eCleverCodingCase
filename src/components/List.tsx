import React, { useEffect, useState } from 'react'
import { getCountries, addCountry, updateTodo, deleteTodo } from '../API'
import AddCountry from '../components/AddCountry'
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
          <div className='country-list' key={country._id}>
            <h3>{country.name}</h3>
            <button className="edit-capital">edit</button>
            <button className="delete-capital">delete</button>
            <hr />
          </div>
        ))}
    </div>
  )
}

export default List
