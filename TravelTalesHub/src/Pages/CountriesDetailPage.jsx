import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';

const CountriesDetailPage = () => {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null); 

  const fetchOneCountry = async () => {
    try {
      const response = await fetch(`http://localhost:5000/countries/${countryId}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const oneCountry = await response.json();
      setCountry(oneCountry);
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
              <Image src={country.image1} alt={country.name} fluid />
            </Col>
            <Col xs={12} md={6}>
              <h2>{country.name}</h2>
              <p><strong>Capital:</strong> {country.capital}</p>
              <p><strong>Description:</strong> {country.description}</p>
            </Col>
          </Row>
          <hr />
          <h3>Tourist Places</h3>
          {/* Add content for tourist places here */}
        </>
      ) : (
        <p>Loading...</p> 
      )}
    </Container>
  );
};

export default CountriesDetailPage;
