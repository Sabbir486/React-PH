import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Specisl = ({ name, asset }) => {

    const Asset2 = useContext(AssetContext);
    // console.log("New Asset: ", Asset2);
    

    return (
        <div>
            <h3>My Special One</h3>
            <p>{name}</p>
            <p>Asset: {asset}</p>
            <p>New Asset: {Asset2}</p>
        </div>
    );
};

export default Specisl;