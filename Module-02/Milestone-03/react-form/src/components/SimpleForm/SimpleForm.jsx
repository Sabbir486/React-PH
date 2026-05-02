import React from 'react';

const SimpleForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Submitted');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" />
                <br />
                <input type="submit" value="submit"/>
            </form>
        </div>
    );
};

export default SimpleForm;