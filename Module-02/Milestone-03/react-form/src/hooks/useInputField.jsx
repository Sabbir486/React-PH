// import React from 'react';
import { useState } from 'react';

const useInputField = (defaultValue) => {
    
    const [fieldValue, setFieldValue] = useState(defaultValue);

    const handleFieldChange = (event) => {
        setFieldValue(event.target.value);
    }

    return [fieldValue, handleFieldChange];
};

export default useInputField;