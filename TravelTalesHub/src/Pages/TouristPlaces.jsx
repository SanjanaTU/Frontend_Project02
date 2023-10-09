import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const TouristPlaces = () => {
  const { touristId } = useParams();
  const [tourist, setTourist] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchTouristData = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/tourist/${touristId}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const oneTourist = await response.json();
      setTourist(oneTourist);
      setIsLoaded(true);
    } catch (error) {
      console.error("Error fetching tourist data:", error);
    }
  };

  useEffect(() => {
    fetchTouristData();
  }, []);

  return (
    <div className={`tourist-container ${isLoaded ? "fade-in" : ""}`}>
      {tourist ? (
        <div className="tourist-content">
          <div className="image-container">
            <img
              src={tourist.placeImage}
              alt={tourist.placeName}
              className="tourist-image"
            />
          </div>
          <div className="description-container">
            <h1 className="tourist-title">{tourist.placeName}</h1>
            <p className={`tourist-description ${isLoaded ? "fade-in" : ""}`}>
              {tourist.description}
            </p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TouristPlaces;
