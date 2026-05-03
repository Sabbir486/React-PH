import React from 'react';
import { useState } from 'react';

const ControlledField = () => {

    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handlePasswordChange = (event) => {
        console.log(event.target.value);
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
        </div>
    );
};

export default ControlledField;