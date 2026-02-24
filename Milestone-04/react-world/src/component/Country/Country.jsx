import React from 'react';

const Country = ({country}) => {

    // const {common} = country;

    return (
        <div>
            <h3>Name: {country.name.common}</h3>
            <h4>Official Name: {country.name.official}</h4>
            <img src={country.flags.png} alt="" />

        </div>
    );
};

export default Country;