import React, { use } from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {

    const users = useLoaderData();
    console.log(users);
    

    return (
        <div>
            <h2>Users</h2>
            <p>This is the Users page.</p>
        </div>
    );
};

export default Users;