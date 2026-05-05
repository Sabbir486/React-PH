// import React from 'react';
import useInputField from '../../hooks/useInputField';

const HookForm = () => {

    const [name, handleNameChange] = useInputField('');
    const [email, handleEmailChange] = useInputField('');
    const [password, handlePasswordChange] = useInputField('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submit', name, email, password);
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Name' value={name} onChange={handleNameChange} defaultValue={name}/>

                <br />
                <input type="email" placeholder='Email' value={email} onChange={handleEmailChange} defaultValue={email}/>
                <br />
                <input type="password" placeholder='Password' value={password} onChange={handlePasswordChange} defaultValue={password}/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;