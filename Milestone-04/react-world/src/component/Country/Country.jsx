import React, { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountries}) => {

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

    return (
        <div className={`country ${visit && 'country-visit'}`}>
            <h3>Name: {country.name.common}</h3>
            <h4>Official Name: {country.name.official}</h4>
            <img src={country.flags.png} alt="" />

            <button onClick={handleVisited}>{visit ? 'Visited' : 'Not Visited'}</button>

        </div>
    );
};

export default Country;