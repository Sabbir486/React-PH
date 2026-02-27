import React from 'react';

const Bottle = ({bottle}) => {

    const {name} = bottle;

    return (
        <div className='bo-card'>
            <p>Name: {name}</p>
        </div>
    );
};

export default Bottle;