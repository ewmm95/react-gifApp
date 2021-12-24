import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = ({target: {value}}) => setInputValue(value)
    const handleSubmit = (e) => {
        e.preventDefault();
        setCategories( x => [inputValue, ...x] );
        setInputValue('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                className='input-search'
                type='text'
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}