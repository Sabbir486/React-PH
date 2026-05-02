import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {

    const user = useLoaderData();
    // console.log(user);

    const {website} = user;

    return (
        <div>
            <h3>User Details Here</h3>
            <h5>Name: {user.name}</h5>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;