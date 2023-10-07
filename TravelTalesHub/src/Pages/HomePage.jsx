import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
//import { useHistory } from "react-router-dom";



const HomePage = () => {
  const [selectCountry, setSelectCountry] = useState([]);
  const fetchCountry = async () => {
    try {
      const response = await fetch(`http://localhost:5000/countries`);
      if (response.ok) {
        const countries = await response.json();
        setSelectCountry(countries);
        console.log(countries)
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  useEffect(() => {
    fetchCountry();
  }, []);


 // const history = useHistory();
  //const handleChange = () => window.open(`/countries/${country.id}`);
  const handleChange = event => {
    console.log(event.target.value);
    window.open(`/countries/${event.target.value}`);
  };

    
  return (
    <div>
        
      <select onChange={handleChange}>
      
        <option>Select the Country</option>
        {selectCountry.map((country) => (
         
         <option key={country.id} value={country.id}>
          {country.name}
          </option>
        
        ))}
    </select>
    </div>
  );
   
    
}

export default HomePage
