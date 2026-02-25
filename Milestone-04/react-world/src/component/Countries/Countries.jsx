import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = (country) => {
        console.log('Country Visited clicked to be added', country);
        
    }
    
    const countries = use(countriesPromise);
    // console.log(countries);
    
    
    return (
        <div>
            <h1>Traveling Countries: {countries.length}</h1>
            <h3>Traveled so far: </h3>

            <div className='countries'>
                {
                countries.map(country => <Country country={country}
                    handleVisitedCountries = {handleVisitedCountries}
                ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;