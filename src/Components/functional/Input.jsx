import React from 'react';

const Input = ({ name, placeholder, value, onChange }) => {
    return (
        <input
            autoComplete='off'
            type="text"
            name={name}
            id={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}

export default Input;
