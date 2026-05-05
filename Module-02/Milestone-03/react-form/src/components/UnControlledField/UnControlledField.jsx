// import React, { use } from 'react';
import { useRef } from 'react';

const UnControlledField = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={passwordRef} type="password" name='password' placeholder='Password' />
                <br />
                <input ref={emailRef} type="email" name='email' placeholder='Email' />
                <br />
                <input type="submit" value="Submit" />
            </form>
            
        </div>
    );
};

export default UnControlledField;