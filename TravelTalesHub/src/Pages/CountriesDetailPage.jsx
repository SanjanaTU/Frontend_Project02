import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CountriesDetailPage = () => {
    const {countryId} = useParams()
    const [country,setCountry]= useState("")

    const fetchOneCountry = async () =>{
        const response = await fetch(`http://localhost:5000/countries/${countryId}`);
        const oneCountry = await response.json()
        setCountry(oneCountry);
        console.log(oneCountry)
    };
    useEffect(()=>{
        fetchOneCountry();

    },[countryId])
  return (
    <div>
      <img src={country.image1} style={{ width: '500px' }} />
      <p>Name : {country.name}</p>
      <p>Captial : {country.capital}</p>
      <p>{country.description}</p>
      <div>
        <p>Tourist Places</p>
      </div>
      
     
     
    </div>
  )
}

export default CountriesDetailPage
