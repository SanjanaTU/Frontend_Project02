import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap"; 

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const fetchAllCountries = async () => {
    console.log(`${import.meta.env.VITE_API_URL}/countries`)
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/countries`);
      if (response.ok) {
        const allCountries = await response.json();
        setCountries(allCountries);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    fetchAllCountries();
  }, []);

  return (
    <Container>
      <h1 className="text-center mt-4 mb-4">Explore The Places</h1>
      <Row>
        {countries.map((country) => (
          <Col key={country.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card>
              <Link to={`/countries/${country.id}`} className="country-link">
                <Card.Img
                  src={country.image}
                  alt={country.name}
                  className="country-image"
                />
                <Card.Body>
                  <Card.Title className="country-name">
                    {country.name}
                  </Card.Title>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Countries;
