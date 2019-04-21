import React from 'react';

const Button = ({ children, onClick }) => {
    return (
        <button data-testid="ee-button" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
