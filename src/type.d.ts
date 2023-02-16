interface ICountry {
    country: string
    name: string
    latitude: number
    longitude: number
}

type CountryProps = {
    country: ICountry
}
