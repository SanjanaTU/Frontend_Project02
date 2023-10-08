import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';

const CountriesDetailPage = () => {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null); 
  const [place, setPlace] = useState("")

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
  }, []);
  {
    useEffect(() => {
        fetchOneCountry()
    }, [place])
}


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
              style={{ height: '300px', width: '500px', border: '2px solid #000' }}
            />
          </Col>
          <Col xs={12} md={6}>
            <h2>{country.name}</h2>
            <p className="mb-0">
              <strong>Capital:</strong> {country.capital}
            </p>
            <p>
              <strong>Description:</strong> {country.description}
            </p>
          </Col>
        </Row>
        <hr />
        <h3>Tourist Places</h3>
        <ul>
            {country.tourist ? (
              country.tourist.map((touristplace) => (
                <li key={touristplace}>
                  <Link to={`/${touristplace.toLowerCase()}`}>{touristplace}</Link>
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
