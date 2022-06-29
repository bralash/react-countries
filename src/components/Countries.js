import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Country from './Country'


const url = 'https://restcountries.com/v2/all'

const Countries = () => {
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchTitle, setSearchTitle] = useState("")

  
  const fetchCountryData = async () => {
    setIsLoading(true)
    const response = await axios.get(url);
    const countries = response.data;
    setCountries(countries)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchCountryData();
  },[])

  return (
    <div className='px-20 py-12 dark:bg-body-dark dark:text-white grid grid-cols-4 gap-20'>
        {countries.map(country => {
            const { numericCode, name, population, region, capital, flag} = country
            return (
                <Country key={numericCode} name={name} flag={flag} />
            )
        })}
    </div>
  )
}

export default Countries