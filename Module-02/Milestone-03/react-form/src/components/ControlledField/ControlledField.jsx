// import React from 'react';
import { useState } from 'react';

const ControlledField = () => {

    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(name, email, password);
        
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

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Name' name='Name' onChange={handleNameChange} defaultValue={name} required />
                <br />


                <input type="email" placeholder='Email' name='Email' onChange={handleEmailChange} defaultValue={email} required />
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