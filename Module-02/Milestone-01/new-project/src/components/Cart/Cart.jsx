import React from 'react';
import Feature from './Feature';

const Cart = ({price}) => {

    const {features} = price;
    
    return (
        <div className='flex flex-col border bg-amber-500 rounded-2xl p-4 mt-5'>
            {/* Cart Header */}
            <div>
                <h1 className='text-5xl'>{price.name}</h1>
                <h1 className='text-3xl'>{price.price}</h1>

            </div>

            {/* Cart Body */}
            <div className='text-black flex-1'>
                <p>{price.duration}</p>
                <h3 className='font-bold'>All Features</h3>
                {
                    features.map((feature, index) => <Feature
                    key={index} 
                    feature={feature}></Feature>)
                }
            </div>
            <button className="mt-4 btn w-full">Subscribe</button>
            
        </div>
    );
};

export default Cart;