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

export const addTodo = async (
    formData: ICountry
): Promise<AxiosResponse<ICountry>> => {
    try {
        const todo: Omit<ICountry, '_id'> = {
            name: formData.name,
            description: formData.description,
            status: false,
        }
        const saveTodo: AxiosResponse<ICountry> = await axios.post(
            baseUrl + '/add-todo',
            todo
        )
        return saveTodo
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
