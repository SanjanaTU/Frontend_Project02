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
      <h1>Explore The Places</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.id}>

<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img src={country.image} alt={country.name}   className="h-full w-full object-cover object-center lg:h-full lg:w-full" ></img>
        </div>
         
          <p> Name:{country.name} </p> 
          <p></p>
           </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
