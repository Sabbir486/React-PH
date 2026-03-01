import React, { use, useState } from 'react';
import Bottle from '../bottle/Bottle';

const Bottles = ({bottlesPromise}) => {

    const bottles = use(bottlesPromise);
    // console.log(bottles);

    const [cart, setCart] = useState([]);

    const handleAddtoCart = (bottle) => {
        // console.log('Bottle will be added to cart', bottle );
        const newCart = [...cart, bottle];
        setCart(newCart);
        
    }
    

    return (
        <div>
            <h2>Total Bottles: {bottles.length}</h2>
            <p>Added to Cart Number: {cart.length}</p>
            {
                bottles.map(bottle => <Bottle key={bottle.id}
                     bottle={bottle}
                     handleAddtoCart= {handleAddtoCart}
                     ></Bottle>)
            }
        </div>
    );
};

export default Bottles;