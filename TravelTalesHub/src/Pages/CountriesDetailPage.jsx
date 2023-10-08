import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

const CountriesDetailPage = () => {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);

  const fetchOneCountry = async () => {
    try {
      const response = await fetch(`http://localhost:5000/countries/${countryId}`);
      if (response.ok) {
        const oneCountry = await response.json();
        setCountry(oneCountry);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchOneCountry();
  }, [countryId]);

  return (
    <Container className="mt-4">
      {country ? (
        <>
          <Row>
            <Col xs={12} md={6}>
              <Image
                src={country.image1}
                alt={country.name}
                fluid
                className="country-image"
              />
            </Col>
            <Col xs={12} md={6}>
              <h2>{country.name}</h2>
              <p className="mb-3">
                <strong>Capital:</strong> {country.capital}
              </p>
              <p className="description">{country.description}</p>
            </Col>
          </Row>
          <hr className="my-4" />
          <h3>Tourist Places</h3>
          <ul className="tourist-places-list">
            {country.tourist ? (
              country.tourist.map((touristplace) => (
                <li key={touristplace}>
                  <Link to={`/${touristplace.toLowerCase()}`} className="tourist-link">
                    {touristplace}
                  </Link>
                </li>
              ))
            ) : (
              <p>No tourist places available.</p>
            )}
          </ul>
        </>
      ) : (
        <p>Loading...</p>
      )}
      
    </Container>
  );
};

export default CountriesDetailPage;
