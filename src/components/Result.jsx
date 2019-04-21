import React from 'react';

const Result = props => {
    return (
        <div data-testid="ee-c-result">
            <label htmlFor="result" data-testid="ee-result__label">Result:</label>
            <input id="result" disabled type="text" data-testid="ee-result__box" value={props.value} />
        </div>
    );
};

export default Result;
