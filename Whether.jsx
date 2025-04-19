 import { useState } from "react";
import "./Whether.css";
function Whether()
{
  const[humidity,setHumidity]=useState(null);
  const[speed,setSpeed]=useState(null);
   const [temp,setTemp]=useState(null);
  const[input,setInput]=useState(null);
  let[error,setError]=useState(null);
  let apiurl="https://api.openweathermap.org/data/2.5/weather?q="
  const key="43a6327b3284fae7f1d8fc1b08ae70be";
  async function checkWether()
  {
    // try {
     
     
     try {
      const res= await fetch(apiurl+input+"&appid="+"43a6327b3284fae7f1d8fc1b08ae70be"); 
      const nres=await res.json();
      console.log(nres);
       const temp1=nres.main.temp;
    setTemp(Math.round(temp1-273.15));
      const s=nres.wind.speed;
      setSpeed(s);
      let h=nres.main.humidity;
      setHumidity(h);
     } catch (err) {
         error="city Not Found";
         setError(error)
     } 
  
    }
//  let wind=document.querySelector(".wind");
//   let w=nres.wind.speed;
//    wind.innerHTML= `wind speed:  ${w}(m/sec)`

//    let h=nres.main.humidity;
//    let hum=document.querySelector(".humd");
//      hum.innerHTML=`humidity: ${h}(%)`
//     } catch (error) {
//      let mid1=document.querySelector(".mid1");
//      mid1.innerHTML="Please enter Valid City Name" 
     
//     }

    return(
        <>
                       <div className="top">
                   <div className="search">
                    <input type="text" placeholder="Search your city"
                     className="inpt" 
                      value={input}
                      onChange={(e)=>setInput(e.target.value)}
                     />
                    <button className="btn" onClick={checkWether}>Search</button>
                       <div className="img">
                        <img src="https://cdn-icons-png.flaticon.com/128/2698/2698194.png" alt=""/>
                    </div>
                    <div>
                      <img src="https://static.thenounproject.com/png/5256331-200.png" alt="" />
                    </div>
                        <div>
                            <h1>
                            {error}
                            </h1>
                        </div>
                        <div>
                            <h1 className="mid1">
                              Temp : {temp} (°C)
                            </h1>
                         </div>
                         <div className="mid2">
                          <img src="https://cdn-icons-png.flaticon.com/128/2011/2011448.png" alt=""/>
                          <img src="https://cdn-icons-png.flaticon.com/128/9290/9290237.png" alt=""/>
                         </div>
                       <div className="buttom">
                        
                        <h2 className="wind">
                           wind speed: {speed}(m/sec) 
                        </h2>
                        <h2 className="humd">
                            humidity dulare: {humidity}(%)
                       </h2>
                     </div>
                   </div>  
            </div>

        </>
    )
}
export default Whether;