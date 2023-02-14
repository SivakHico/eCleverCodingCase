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
      <h1>Form</h1>
      <AddCountry saveCountry={handleSaveCountry} />
      {countries.map((country: ICountry) => (
        <div key={country._id}>
          <h3>{country.name}</h3>
          <p></p>
        </div>
      ))}
    </div>
  )
}

export default List
