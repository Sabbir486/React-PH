import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const UserDetails = () => {

    const user = useLoaderData();
    // console.log(user);
    const navigate = useNavigate();

    const {website} = user;

    return (
        <div>
            <h3>User Details Here</h3>
            <h5>Name: {user.name}</h5>
            <p>Website: {website}</p>

            <button className='border-2 p-2 rounded-2xl mt-3.5' onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default UserDetails;