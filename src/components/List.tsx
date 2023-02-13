import React, { useEffect, useState } from 'react'
import { getCountries, addTodo, updateTodo, deleteTodo } from '../API'

const List: React.FC = () => {
  const [countries, setCountries] = useState<ICountry[]>([])

  useEffect(() => {
    getCountries()
      .then(({ data: item }: ICountry[] | any) => setCountries(item))
      .catch((err: Error) => console.log(err))
  }, [])

  return (
    <main className="App">
      <h1>Form</h1>

      {countries.map((country: ICountry) => (
        <div key={country._id}>
          <h3>{country.name}</h3>
          <p></p>
        </div>
      ))}
    </main>
  )
}

export default List
