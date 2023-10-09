import React from 'react'
import './HomePage.css'
import { useState } from 'react';
import { useEffect } from 'react';




const HomePage = () => {
  const [selectCountry, setSelectCountry] = useState([]);
  const fetchCountry = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/countries`);
      if (response.ok) {
        const countries = await response.json();
        setSelectCountry(countries);
        console.log(countries)
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  useEffect(() => {
    fetchCountry();
  }, []);



  const handleChange = event => {
    console.log(event.target.value);
    window.open(`/countries/${event.target.value}`);
  };

    
  return (
    <div className="video-container  overflow-hidden overflow-x-hidden " >
    <video src="./src/assets/waves.mp4" className='object-fit-fill'    muted autoPlay loop type="video/mp4"></video>
   <div className="content">
   <h1 className='smallText'>EXPLORE.DREAM.DISCOVER</h1>
    <h3>"The best view comes after the hardest climb."</h3>
    <h6>This is a Travel tales featuring beautiful destinations,new experinences,hidden gems around the world...</h6>
  <br/>
  <h6>Please tag along!
  </h6>
  <section className="home">
  <select onChange={handleChange}>
    <option>Country you want to explore</option>
    {selectCountry.map((country) => (
     
     <option key={country.id} value={country.id}>
      {country.name}
      </option>
      
    
    ))}
</select>
</section>
   </div>
  </div>

);
   
    
}

export default HomePage
