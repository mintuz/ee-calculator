import React, { useState } from 'react';
import Result from './components/Result';
import Button from './components/Button';
import Calculate from './libs/Calculate';

const calculateMapping = {
    '+': Calculate.add,
    '-': Calculate.subtract,
    '*': Calculate.multiply,
    '/': Calculate.divide,
};

const OPERATOR_REGEX = /(\*|\+|\/|-)/g;

const Calculator = () => {
    const [currentResult, setResult] = useState(0);
    const [previousActions, setAction ] = useState([]);

    const calculate = operation => {

        if (operation === 'AC') {
            setResult(0);
            setAction([]);

            return;
        }

        if (operation === '=')  {
            const expression = previousActions.join('');

            const expressionSplit = expression.split(OPERATOR_REGEX);
            const firstNumber = expressionSplit.shift();

            let operatorToUse = '';

            let result = expressionSplit.reduce((result, value) => {
                if (OPERATOR_REGEX.test(value)) {
                    operatorToUse = value;
                    return result;
                }

                if (operatorToUse) {
                    return calculateMapping[operatorToUse](Number(result), Number(value));
                }

                return value;
            }, firstNumber);

            if (Number.isNaN(result) || !Number.isFinite(result)) {
                result = 0;
            }

            setResult(result);

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
                <Button attention="secondary" triple onClick={calculate}>AC</Button>
                <Button attention="secondary" onClick={calculate}>/</Button>

                <Button onClick={calculate}>{7}</Button>
                <Button onClick={calculate}>{8}</Button>
                <Button onClick={calculate}>{9}</Button>
                <Button attention="secondary" onClick={calculate}>*</Button>

                <Button onClick={calculate}>{4}</Button>
                <Button onClick={calculate}>{5}</Button>
                <Button onClick={calculate}>{6}</Button>
                <Button attention="secondary" onClick={calculate}>-</Button>

                <Button onClick={calculate}>{1}</Button>
                <Button onClick={calculate}>{2}</Button>
                <Button onClick={calculate}>{3}</Button>
                <Button attention="secondary" onClick={calculate}>+</Button>

                <Button onClick={calculate}>{0}</Button>
                <Button onClick={calculate}>.</Button>
                <Button attention="secondary" double onClick={calculate}>=</Button>
            </div>
        </div>
    );
};

export default Calculator;
