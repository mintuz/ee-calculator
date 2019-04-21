import React, { useState } from 'react';
import Result from './components/Result';
import Button from './components/Button';

const Calculator = () => {
    const [currentResult, setResult] = useState(0);
    const [previousActions, setAction ] = useState([]);

    const calculate = operation => {

        if (operation === 'AC') {
            setResult(0);
            setAction([]);

            return;
        }

        const newActions = [...previousActions, operation];

        setAction(newActions);
        setResult(newActions.join(''));
    };

    return (
        <div className="ee-c-calculator">
            <Result value={currentResult} />
            <div className="ee-c-calculator__controls">
                <Button onClick={calculate}>AC</Button>
                <Button onClick={calculate}>/</Button>

                <Button onClick={calculate}>{7}</Button>
                <Button onClick={calculate}>{8}</Button>
                <Button onClick={calculate}>{9}</Button>
                <Button onClick={calculate}>*</Button>

                <Button onClick={calculate}>{4}</Button>
                <Button onClick={calculate}>{5}</Button>
                <Button onClick={calculate}>{6}</Button>
                <Button onClick={calculate}>-</Button>

                <Button onClick={calculate}>{1}</Button>
                <Button onClick={calculate}>{2}</Button>
                <Button onClick={calculate}>{3}</Button>
                <Button onClick={calculate}>+</Button>

                <Button onClick={calculate}>{0}</Button>
                <Button onClick={calculate}>.</Button>
                <Button onClick={calculate}>=</Button>
            </div>
        </div>
    );
};

export default Calculator;
