import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const fetchAllCountries = async () => {
    try {
      const response = await fetch(`http://localhost:5000/countries`);
      if (response.ok) {
        const allCountries = await response.json();
        setCountries(allCountries);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchAllCountries();
  }, []);

  return (
    <div className="container">
      <h1 className="heading">Explore The Places</h1>
      <ul className="country-list">
        {countries.map((country) => (
          <li key={country.id} className="country-item">
            <Link
              to={`/countries/${country.id}`}
              className="country-link"
            >
              <img
                src={country.image}
                alt={country.name}
                className="country-image"
              />
              <p className="country-name">{country.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
