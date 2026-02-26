import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [flags, setFlags] = useState([])

    const handleVisitedCountries = (country) => {
        console.log('Country Visited clicked to be added', country);

        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
        
    }

    const handleFlags = (flag) => {
        const newVisitedFlags = [...flags, flag];
        setFlags(newVisitedFlags);
        
    }
    
    const countries = use(countriesPromise);
    // console.log(countries);
    
    
    return (
        <div>
            <h1>Traveling Countries: {countries.length}</h1>
            <h3>Traveled so far: {visitedCountries.length}</h3>
            
            <div>
                {
                    flags.map(flag => <img src={flag}></img>)
                }
            </div>

            <ol>
                {
                    visitedCountries.map(country => <li>{country.name.common}</li>)
                }
            </ol>

            <div className='countries'>
                {
                countries.map(country => <Country country={country}
                    handleVisitedCountries = {handleVisitedCountries}
                    handleFlags = {handleFlags}
                ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;