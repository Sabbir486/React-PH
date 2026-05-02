import React, { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';

const User = ({user}) => {

    const {name, email, phone} = user;
    const navigate = useNavigate();

    const [visitHome, setVisitHome] = useState(false);

    const location = useLocation();
    console.log(location);

    const handleNavigate = () => {
        navigate(`/users/${user.id}`);
    }

    const userStyle = {
        border: '1px solid yellow',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px'
    }

    if(visitHome){
        return <Navigate to="/"></Navigate>
    }

    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link className='text-blue-700 border-2 p-1 rounded-2xl' to={`/users/${user.id}`}>Show Details</Link>

            <button className='border-2' onClick={handleNavigate}>Details of: {user.id}</button>

            <button onClick={() =>setVisitHome(true)}>Visit Home</button>
        </div>
    );
};

export default User;