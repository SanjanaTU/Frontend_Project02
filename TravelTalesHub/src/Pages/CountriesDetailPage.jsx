import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";
import { Button } from "react-bootstrap";

const CountriesDetailPage = () => {
  const { countryId } = useParams();

  const [country, setCountry] = useState(null);
  const [place, setPlace] = useState("");

  const fetchOneCountry = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/countries/${countryId}`
      );
      const touristresponse = await fetch(
        `${import.meta.env.VITE_API_URL}/tourist`
      );
      const parse = await touristresponse.json();
      console.log(parse);

      const filtertourist = parse.filter(
        (onetourist) => onetourist.countryId == countryId
      );
      console.log(filtertourist);

      setPlace(filtertourist);

      if (response.ok) {
        const oneCountry = await response.json();
        setCountry(oneCountry);
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchOneCountry();
  }, []);

  const handleDelete = async (id) => {
    try {
     
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/tourist/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json", }
        }
      );

        setPlace((prevPlace) =>
        prevPlace.filter((touristplace) => touristplace.id !== id)
      );
    } catch (error) {
      console.error("Error deleting tourist place:", error);
    }
  };

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
                className="countryimage"
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
            {place ? (
              place.map((touristplace) => (
                <li key={touristplace.id}>
                  <Link
                    to={`/countries/${countryId}/tourist/${touristplace.id}`}
                    className="tourist-link"
                  >
                    {touristplace.placeName}
                  </Link>
                  <Button
                    className="custom-button"
                    onClick={() => handleDelete(touristplace.id)}>
                    <span className="trash-icon">🗑️</span>
                  </Button>
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
