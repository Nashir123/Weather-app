 import { useState } from "react";
import "./new.css";
function NewWhether()
{
    const[humidity,setHumidity]=useState(null);
    const[presure,setPresure]=useState(null);
   //   const[speed,setSpeed]=useState(null);
      const[speed,setSpeed]=useState(null);
       const [temp,setTemp]=useState(null);
      const[input,setInput]=useState(null);
      const[contry,setContry]=useState(null);
      const[city,setCity]=useState(null);
      let[error,setError]=useState(null);
    let apiurl="https://api.openweathermap.org/data/2.5/weather?q="
     const key="43a6327b3284fae7f1d8fc1b08ae70be";
    async function checkWether()
    {
        console.log("Inside ! check wether")
       try {
        const res= await fetch(apiurl+input+"&appid="+"43a6327b3284fae7f1d8fc1b08ae70be"); 
        const nres=await res.json();
        console.log("response = ",nres);
         const temp1=nres.main.temp;
      setTemp(Math.round(temp1-273.15));
        const s=nres.wind.speed;
        setSpeed(s);
        let h=nres.main.humidity;
        setHumidity(h);
        let pre=nres.main.pressure;
        setPresure(pre);
        let con=nres.sys.country;
        setContry(con)
        let cit=nres.name;
        console.log("city ",cit);
        setCity(cit);
       } catch (err) {
           error="city Not Found";
           console.log("error occur ",err);
           setError(error)
       } 
    
      }
  
    return(
        <>
              <div class="app-container">
    <div class="glass-card">
      <h2 class="title">🌤️ Weather Forecast</h2>
      
      <div class="search-box">
        <input type="text" placeholder="Enter city..." 
                value={input}
                onChange={(e)=>setInput(e.target.value)}
        />
        <button onClick={checkWether}>🔍</button>
      </div>

      <div class="weather-data">
        <h3 class="city-name">{city} , {contry}</h3>
        <img class="weather-icon" src="https://openweathermap.org/img/wn/01d@2x.png" alt="Weather Icon" />
        <div class="temp"> Temp:{temp}(°C)</div>
        <p class="desc">Clear Sky</p>

        <div class="extra-info">
          <div class="info-box">
            <p>💧 Humidity</p>
            <span>{humidity}%</span>
          </div>
          <div class="info-box">
            <p>🌬️ Wind</p>
            <span> {speed} m/s</span>
          </div>
          <div class="info-box">
            <p>📈 Pressure</p>
            <span>{presure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  </>
    )
}

export default NewWhether; 