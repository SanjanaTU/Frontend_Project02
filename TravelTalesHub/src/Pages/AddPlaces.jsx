import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function AddPlaces(){
    const navigate =  useNavigate()
    const [placeName,setplaceName]=useState('');
    const [placeImage,setplaceImage]=useState('');
    const [description,setDescription]=useState('');
    const onSubmit = async event=>{
        event.preventDefault();

        const values={
            placeName,
            placeImage,
            description,
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
            navigate('/')//i have to redirect to torist places according to sanjana id 
        }
    }catch(error){
        console.log(error)
    }
             
    }
    return (
        <form style={{display:"grid", gridTemplate:'auto/3fr', justifyItems: 'center'}} 
        onSubmit={onSubmit}>
            <div>
            <label>
                PlaceName
                <input value={placeName} type="text" id="name" onChange={(event) =>setplaceName(event.target.value)} required/>
            </label>
            </div>
            <div className="mb-3">
            <label for="formFile" class="form-label">PlaceImage</label>
               <input value={placeImage} className="form-control" type="file" id="formFile" onChange={(event) =>setImage(event.target.value)} required/>
            </div>
            <div>
            <label>
                Description
                <textarea value={description} type="text"  onChange={(event) =>setDescription(event.target.value)} required/>
            </label>
            </div>
            <div>
            <label>
                <button type="submit">Add Place</button>
            </label>
            </div>
        </form>
    )

}
export default AddPlaces