import React, { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountries, handleFlags}) => {

    const [visit, setVisit] = useState(false);

    const handleVisited = () => {
        if(visit === true){
            setVisit(false);
        }

        else{
            setVisit(true);
        }

        handleVisitedCountries(country);
        
    }

    const handleVisitedFlags = () => {
        handleFlags(country.flags.png);
    }

    return (
        <div className={`country ${visit && 'country-visit'}`}>
            <h3>Name: {country.name.common}</h3>
            <h4>Official Name: {country.name.official}</h4>
            <img src={country.flags.png} alt="" />

            <button onClick={handleVisited}>{visit ? 'Visited' : 'Not Visited'}</button>

            <button onClick={handleVisitedFlags}>Visited Flag</button>

        </div>
    );
};

export default Country;