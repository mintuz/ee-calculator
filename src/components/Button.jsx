import React from 'react';
import classNames from 'classnames';

const Button = ({ children, onClick, double }) => {
    return (
        <button
            className={classNames(
                'ee-o-button',
                {
                    'ee-o-button--span-double': double,
                }
            )}
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
