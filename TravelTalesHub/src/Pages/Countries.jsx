import React, { useEffect, useState } from 'react';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const fetchAllCountries = async () => {
    try {
      const response = await fetch(`http://localhost:5000/countries`);
      if (response.ok) {
        const allCountries = await response.json();
        setCountries(allCountries);
        console.log(allCountries)
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  useEffect(() => {
    fetchAllCountries();
  }, [countries]);

  return (
    <div>
      <h1>List of Countries</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.id}>
           <p>Name:{country.name}</p> 
           <p>Capital:{country.capital}</p> 
          <img src={country.image} alt={country.name}    style={{
                  height: '150px',
                  borderRight: '2px dashed darkgrey',
                  paddingRight: '15px',
                }}/>
          <p>Description:{country.description}</p>
           </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
