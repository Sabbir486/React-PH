import React, {use} from 'react';
import Cart from '../Cart/Cart';

const Pricing = ({pricingPromise}) => {

    const pricingData = use(pricingPromise);
    // console.log(pricingData);
    

    return (
        <div>
            <h2 className='text-3xl'>Get our Membership</h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    pricingData.map(price => <Cart key={price.id} price = {price}></Cart>)
                }
            </div>
        </div>
    );
};

export default Pricing;