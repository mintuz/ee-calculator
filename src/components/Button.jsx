import React from 'react';
import classNames from 'classnames';

const Button = ({ children, onClick }) => {
    return (
        <button
            className={classNames('ee-o-button')}
            data-testid="ee-button"
            onClick={() => {
                onClick(children);
            }}
        >
            {children}
        </button>
    );
};

export default Button;
