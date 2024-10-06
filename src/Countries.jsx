import react from "react";
import {useState,useEffect} from "react";
import "./Countries.css";
const CountryCard=({country})=>{
   return (
    <div className="country-card">
        <img src={country.flag} alt="flag"/>
        <p style={{paddingTop:"10px",textAlign:"center"}}>{country.name}</p>
    </div>
   )
}
const Countries=()=>{

    const [countries,setCountries]=useState([]);
    
    async function fetchData(){
        try{
        const response=await fetch("https://xcountries-backend.azurewebsites.net/all");
        const res=await response.json();
         
        setCountries(res);
        }catch(error){
            console.error("Error fetching data:");
        }
          }

    useEffect( ()=>{
        
         fetchData();
    },[]);
    return(
        <div>
        <h2>Country_Flag</h2>
        <div className="country">
            
             {
                countries.map((item)=>(
                    <CountryCard country={item}/>
                ))
            }
        </div>
        </div>
    )
}
export default Countries;