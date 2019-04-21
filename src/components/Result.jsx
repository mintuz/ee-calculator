import React from 'react';

const Result = props => {
    return (
        <div className="ee-c-result" data-testid="ee-c-result">
            <label className="ee-u-vh" htmlFor="result" data-testid="ee-result__label">Result:</label>
            <input className="ee-c-result__box" id="result" disabled type="text" data-testid="ee-result__box" value={props.value} />
        </div>
    );
};

export default Result;
