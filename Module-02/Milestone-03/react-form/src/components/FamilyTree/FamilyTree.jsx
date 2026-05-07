// import React from 'react';
import Grandpa from './Grandpa';
import './FamilyTree.css';
import { createContext } from 'react';

export const AssetContext = createContext('');

const FamilyTree = () => {

    const asset = 'diamond';
    const asset2 = 'gold';

    return (
        <div className='family-tree'>
            <h2>Family Tree</h2>

            <AssetContext.Provider value={asset2}>
                <Grandpa asset={asset}></Grandpa>
            </AssetContext.Provider>

        </div>
    );
};

export default FamilyTree;
