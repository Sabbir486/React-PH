import React from 'react';

const Specisl = ({ name, asset }) => {
    return (
        <div>
            <h3>My Special One</h3>
            <p>{name}</p>
            <p>Asset: {asset}</p>
        </div>
    );
};

export default Specisl;