import React from 'react';

const FormAction = () => {

    const handleAction = (event) => {
        // event.preventDefault();
        console.log(event.get('name'));
        console.log(event.get('email'));
    }

    return (
        <div>
            <form action={handleAction}>
                <input type="text" name='name' placeholder='Name' />
                <br />
                <input type="email" name='email' placeholder='Email' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormAction;