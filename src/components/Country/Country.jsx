import { useState } from 'react';
import './Style.css'
const Country = ({ country, handleClick }) => {
    // console.log(country)
    const { name, flags, population, area } = country

    const [visit,setVisit]=useState(false)

    function visitClick(){
        setVisit(true)
    }
    

    return (
        <div className={`country  ${visit ? "visit" : "no-visit"}`} >
            <h1>Name: {name.common} </h1>
            <img src={flags.png} alt="" />
            <b><p>Population: {population}</p></b>
            <b> <p>Area: {area}</p></b>
            <button onClick={()=>handleClick(country)}>List</button> <br />
            <button onClick={visitClick}>{ visit ? "visited" : "going"}</button>
            {visit ? "visited" : "i want to visit"}

        </div>
    );
};

export default Country;