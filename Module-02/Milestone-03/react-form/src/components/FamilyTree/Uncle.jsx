// import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className='flex'>
                <Cousin name='Arif'></Cousin>
                <Cousin name='Zarif'></Cousin>
                <Cousin name='Muaz'></Cousin>
            </section>
        </div>
    );
};

export default Uncle;