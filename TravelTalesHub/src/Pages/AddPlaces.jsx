import { useState } from "react";

function AddPlaces(){
    const [name,setName]=useState('');
    const [image,setImage]=useState('');
    const [description,setDescription]=useState('');
    const onSubmit =(event)=>{
        event.preventDefault();
        const values={
            name,
            image,
            description
        }
       
    }
    return (
        <form style={{display:"grid", gridTemplate:'auto/1fr', justifyItems: 'center'}} 
        onSubmit={onSubmit}>
            <label>
                PlaceName
                <input value={name} onChange={(event) =>setName(event.target.value)} required/>
            </label>
            <label>
                PlaceImage
                <input value={image} onChange={(event) =>setImage(event.target.value)} required/>
            </label>
            <label>
                Description
                <input value={description} onChange={(event) =>setDescription(event.target.value)} required/>
            </label>
            <label>
                <button type="submit">Add Place</button>
            </label>
        </form>
    )

}
export default AddPlaces