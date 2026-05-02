import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {

    const {name, email, phone} = user;

    const userStyle = {
        border: '1px solid yellow',
        margin: '10px',
        padding: '10px',
        borderRadius: '5px'
    }

    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link className='text-blue-700 border-2 p-1 rounded-2xl' to={`/users/${user.id}`}>Show Details</Link>
        </div>
    );
};

export default User;