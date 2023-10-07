import React, { useEffect, useState } from "react";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const fetchAllCountries = async () => {
    try {
      const response = await fetch(`http://localhost:5000/countries`);
      if (response.ok) {
        const allCountries = await response.json();
        setCountries(allCountries);
        console.log(allCountries);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    fetchAllCountries();
  }, []);

  return (
    <div>
      <h1>Explore The Places</h1>
      <ul style={{ listStyleType: "none", display: "flex", flexWrap: "wrap" }}>
        {countries.map((country) => (
          <li key={country.id} style={{ flex: "0 0 33.33%", padding: "10px" }}>
            <img
              src={country.image}
              alt={country.name}
              className="img-fluid img-thumbnail"
              style={{ height: "200px", width: "400px" }}
            />
            <p>{country.name} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
