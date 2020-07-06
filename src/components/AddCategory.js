import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategory}) => {

    // Ocurre un error si se deja el state undefined useState();
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Keep before state
        if (inputValue.length > 0) {
            setCategory(cats => [inputValue, ...cats]);
            setInputValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => handleInputChange(e)}
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}

export default AddCategory;
