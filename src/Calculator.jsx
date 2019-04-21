import React, { useState } from 'react';
import Result from './components/Result';

const Calculator = () => {
    const [currentResult] = useState(0);
    return (
        <Result value={currentResult} />
    );
};

export default Calculator;
