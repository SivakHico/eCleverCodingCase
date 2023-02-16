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
        const countroo: Omit<ICountry, '_id'> = {
            country: formData.country,
            name: formData.name,
            latitude: formData.latitude,
            longitude: formData.longitude
        }
        const saveCountry: AxiosResponse<ICountry> = await axios.post(
            baseUrl + '/',
            countroo
        )
        console.log('API Data: ', saveCountry.data)
        return saveCountry
    } catch (error) {
        throw new Error(error)
    }
}

export const updateCountro = async (
    country: ICountry
): Promise<AxiosResponse<ICountry>> => {
    try {
        const updateCountry: Pick<ICountry, 'status'> = {
            status: true,
        }
        const updatedCountry: AxiosResponse<ICountry> = await axios.put(
            `${baseUrl}/edit-country/${country._id}`,
            updateCountry
        )
        return updatedCountry
    } catch (error) {
        throw new Error(error)
    }
}

export const deleteCountry = async (
    _id: string
): Promise<AxiosResponse<ICountry>> => {
    try {
        const deletedCountry: AxiosResponse<ICountry> = await axios.delete(
            `${baseUrl}/delete-country/${_id}`
        )
        return deletedCountry
    } catch (error) {
        throw new Error(error)
    }
}
