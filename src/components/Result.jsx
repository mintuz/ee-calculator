import React from 'react';

const Result = props => {
    return (
        <input className="ee-c-result-box" disabled type="text" data-testid="ee-result-box" value={props.value} />
    );
};

export default Result;
