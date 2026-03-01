import React from 'react';

const Bottle = ({bottle, handleAddtoCart}) => {

    const {name, price, capacity_ml} = bottle;

    return (
        <div className='bo-card'>
            <p>Company Name: {name}</p>
            <p>Price in Dollar: ${price}</p>
            <p>Quantity in ML: {capacity_ml}</p>

            <button onClick={() => handleAddtoCart(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;