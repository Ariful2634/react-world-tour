import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";


const Countries = () => {
    const [countries,setCountries]=useState([])
    const [visitedCountries, setVisitedCountries]=useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleClick = country =>{
        const newVisited = [...visitedCountries, country]
        setVisitedCountries(newVisited)
       
        // console.log(country)
    }

    return (
        <div>
            <h2>Countries: {countries.length}</h2>
            <div>
                <h3>Visited Countries: {visitedCountries.length}</h3>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="grd">
            {
                countries.map(country=><Country key={country.name} country={country} handleClick={handleClick}></Country>)
            }
            </div>
            
        </div>
    );
};

export default Countries;