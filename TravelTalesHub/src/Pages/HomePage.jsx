import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';


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


    
  return (
    <div>
        
      <select>
      
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
