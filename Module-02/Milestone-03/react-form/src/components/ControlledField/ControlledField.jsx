import React from 'react';
import { useState } from 'react';

const ControlledField = () => {

    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); 

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);

        if(password.length < 6){
            setError('Password must be at least 6 characters long');
        }
        else{
            setError('');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='Email' name='Email' required />
                <br />
                <input type="password" name="password" id="" placeholder='Password' onChange={handlePasswordChange} defaultValue={password} required/>
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{ color: 'red' }}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlledField;