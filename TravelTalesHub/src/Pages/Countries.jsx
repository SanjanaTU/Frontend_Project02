import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap"; 

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
