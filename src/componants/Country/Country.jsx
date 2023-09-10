import { useState } from "react";
import "./Country.css";
const Country = ({ country }) => {
  
  const { name, flags, area, capital, region, population, startOfWeek, cca3 } =country;

   const [visited,setVisited] = useState(false)

   const handleVisited =() =>{
       setVisited(!visited)
   }

  return (
    <div className="box">
      <h2>Name : {name.common}</h2>
      <img src={flags.png} alt="" />
      <h2>Area : {area}KM</h2>
      <h2>Capita :{capital}</h2>
      <h2>Region : {region}</h2>
      <h2>Population : {population}</h2>
      <h2>Start Of week : {startOfWeek}</h2>
      <p>
        <small>Code :{cca3}</small>
      </p>
      <button onClick={handleVisited} className="button" >{visited ? 'Visited' : 'Going'}</button>
      {visited ? 'i have visited this country' : 'i want to visit'}
    </div>
  );
};

export default Country;
