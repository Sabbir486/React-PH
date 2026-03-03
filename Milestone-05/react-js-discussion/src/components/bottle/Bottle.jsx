import React from 'react';

const Bottle = ({bottle, handleAddtoCart}) => {

    const {name, price, capacity_ml} = bottle;

    return (
        <div className='bo-card'>
            <p>Bottle Company Name: {name}</p>
            <p>Bottle Price: ${price}</p>
            <p>Capacity of Bottle: {capacity_ml}</p>

            <button onClick={() => handleAddtoCart(bottle)}>Buy Bottle</button>
        </div>
    );
};

export default Bottle;