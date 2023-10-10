import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import './AddPlaces.css'

function AddPlaces(){
    const navigate =  useNavigate()
    const {countryId}= useParams()
  
    const [placeName,setplaceName]=useState('');
    const [placeImage,setplaceImage]=useState('');
    const [description,setDescription]=useState('');
    const onSubmit = async event=>{
        event.preventDefault();

        const values={
            placeName,
            placeImage,
            description,
            countryId
        }
        try{
        const response = await fetch(`${import.meta.env.VITE_API_URL}/tourist`,
        {
           method : 'POST',
           body : JSON.stringify(values),
           headers :{"Content-type":'application/json'},

        })
        if(response.ok){
            const newPlace =await response.json()
            console.log(newPlace)
            navigate(`/countries/${countryId}`)
        }
    }catch(error){
        console.log(error)
    }
             
    }
    return (
        <div className="place-form-container">
        <form className="place-form" 
        onSubmit={onSubmit}>
            <div className="form-group">
            <label htmlFor="placeName">
                Place Name:
                <input value={placeName} type="text" id="placeName" className="place-form" onChange={(event) =>setplaceName(event.target.value)} required/>
            </label>
            </div>
            <div className="form-group">
            <label htmlfor="placeImage" class="form-label">Place Image URL:</label>
               <input value={placeImage} className="form-control" type="file" id="placeImage" onChange={(event) =>setplaceImage(event.target.value)} required/>
            </div>
            <div className="form-group">
            <label htmlFor="description">
                Description:
                </label>
                <textarea value={description} id='description' type="text"  onChange={(event) =>setDescription(event.target.value)} required/>
           
            </div>
            
                <button type="submit">Add Place</button>
            
            
        </form>
        {placeImage && (
            <div className="image-preview">
                <img src={placeImage} alt="Place"/>
            </div>
        )}
        </div>
    )

}
export default AddPlaces