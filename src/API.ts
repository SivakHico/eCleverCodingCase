import axios, { AxiosResponse } from 'axios'

const baseUrl: string = 'http://localhost:3000'

export const getCountries = async (): Promise<AxiosResponse<ICountry>> => {
    try {
        const countries: AxiosResponse<ICountry> = await axios.get(
            baseUrl + '/'
        )
        console.log('API Data: ', countries.data)
        return countries
    } catch (error) {
        throw new Error(error)
    }
}

export const addCountry = async (
    formData: ICountry
): Promise<AxiosResponse<ICountry>> => {
    try {
        const country: Omit<ICountry, '_id'> = {
            country: formData.country,
            name: formData.name,
            latitude: formData.latitude,
            longitude: formData.longitude,
        }
        const saveCountry: AxiosResponse<ICountry> = await axios.post(
            baseUrl + '/add-country',
            country
        )
        return saveCountry
    } catch (error) {
        throw new Error(error)
    }
}

export const updateTodo = async (
    todo: ICountry
): Promise<AxiosResponse<ICountry>> => {
    try {
        const todoUpdate: Pick<ICountry, 'status'> = {
            status: true,
        }
        const updatedTodo: AxiosResponse<ICountry> = await axios.put(
            `${baseUrl}/edit-todo/${todo._id}`,
            todoUpdate
        )
        return updatedTodo
    } catch (error) {
        throw new Error(error)
    }
}

export const deleteTodo = async (
    _id: string
): Promise<AxiosResponse<ICountry>> => {
    try {
        const deletedTodo: AxiosResponse<ICountry> = await axios.delete(
            `${baseUrl}/delete-todo/${_id}`
        )
        return deletedTodo
    } catch (error) {
        throw new Error(error)
    }
}
