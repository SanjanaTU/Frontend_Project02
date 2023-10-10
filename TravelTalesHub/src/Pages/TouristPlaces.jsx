import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import './TouristPlaces.css'

const TouristPlaces = () => {
  const { touristId } = useParams();
  const [tourist, setTourist] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState("");

  const fetchTouristData = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/tourist/${touristId}`
      );
      const oneTourist = await response.json();
      setTourist(oneTourist);
      console.log(oneTourist)
   //   setEditedDescription(oneTourist.description);
      setIsLoaded(true);
    } catch (error) {
      console.log("Error fetching tourist data:", error);
    }
  };

  useEffect(() => {
    fetchTouristData();
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedDescription(tourist.description);
  };

  const handleUpdateDescription = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/tourist/${touristId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ description: editedDescription }),
        }
      );
   
      if (response.ok) {
       console.log(response.ok)
        setIsEditing(false);
        fetchTouristData(); 
        console.log("Failed to update description");
      }
    } catch (error) {
      console.log("Error updating description:", error);
    }
  };

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

            {isEditing ? (
              <div className="update-description-container">
                <textarea
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                  rows="4"
                  cols="50"
                  placeholder="Enter new description..."
                ></textarea>
                <button className="update-button" onClick={handleUpdateDescription}>
                  Update Description
                </button>
                <button className="cancel-button" onClick={handleCancelEdit}>
                  Cancel
                </button>
              </div>
            ) : (
              <>
                <div
                  dangerouslySetInnerHTML={{ __html: tourist.description }}
                  className={`tourist-description ${isLoaded ? "fade-in" : ""}`}
                ></div>

                <button className="btn btn-primary_edit" onClick={handleEdit}>
                  <i className="bi bi-pencil-square"></i>
                </button>
              </>
            )}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TouristPlaces;
