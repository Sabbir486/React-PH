// import React from 'react';
import Cousin from './Cousin';

const Aunt = () => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousin name='Abida'></Cousin>
                <Cousin name='Albina'></Cousin>
                <Cousin name='Jani na'></Cousin>
            </section>
        </div>
    );
};

export default Aunt;