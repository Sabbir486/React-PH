import React, { use } from 'react';

const Bottles = ({bottlesPromise}) => {

    const bottles = use(bottlesPromise);
    console.log(bottles);
    

    return (
        <div>
            <h2>Bottles Done</h2>
        </div>
    );
};

export default Bottles;