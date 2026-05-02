import React from 'react';

const SimpleForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.name.value);
        console.log(event.target.email.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Your Name'/>
                <br />
                <input type="email" name='email' placeholder='Your Email'/>
                <br />
                <input type="submit" value="submit"/>
            </form>
        </div>
    );
};

export default SimpleForm;