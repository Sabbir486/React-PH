import React from 'react';
import './Country.css';

const Country = ({country}) => {

    const handleVisited = () => {
        
        
    }

    return (
        <div className='country'>
            <h3>Name: {country.name.common}</h3>
            <h4>Official Name: {country.name.official}</h4>
            <img src={country.flags.png} alt="" />

            <button onClick={handleVisited}>Not Visited</button>

        </div>
    );
};

export default Country;