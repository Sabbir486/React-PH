import React from 'react';
import { Link, useNavigate } from 'react-router';

const User = ({user}) => {

    const {name, email, phone} = user;
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/users/${user.id}`);
    }

    const userStyle = {
        border: '1px solid yellow',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px'
    }

    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link className='text-blue-700 border-2 p-1 rounded-2xl' to={`/users/${user.id}`}>Show Details</Link>

            <button className='border-2' onClick={handleNavigate}>Details of: {user.id}</button>
        </div>
    );
};

export default User;