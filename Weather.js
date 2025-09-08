// import React, { useState } from 'react'
// import './weather.css'

// function Weather() {
//       const [city,setCity]=useState("");
//       const [weather,setweather]=useState(null);
//       const [error,setError]=useState("");

//       const API_KEY="ac10171f30d6124484664d3cd81b35e0";

//       const handleweather=()=>{
//             if(!city){
//                   setError("Enter valid City");
//                   return;
//             }

//             setError('');
//             fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
//             .then(res=>res.json())
//             .then((data)=>{
                  
                  
//                   if(data.cod=== 404){
//                         setError("Data not found")
//                         setweather(null);
//                   }
//                   else{
//                         setweather(data)
//                   }
//             })
//       }

//   return (
//     <div className='weather-container'>
//       <input type='text' onChange={(e)=>setCity(e.target.value)}></input>
//       <button onClick={handleweather}>Search</button>

//       {error && <p style={{color:"red"}}>{error}</p>}
//       {weather && (
//             <>
//             <p>Temperature: {weather.main.temp}°C</p>
//             <p>Feels like: {weather.main.feels_like}°C</p>
//             <p>Humidity: {weather.main.humidity}%</p>
//             <p>Wind Speed: {weather.wind.speed} m/s</p>
//             <p>Condition: {weather.weather[0].main} - {weather.weather[0].description}</p>
//             </>

//       )}
//     </div>
//   )
// }

// export default Weather


