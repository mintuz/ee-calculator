const calculateMapping = {
    '+': (previous, toAdd) => {
        return previous + toAdd;
    },
    '-': (previous, toSubtract) => {
        return previous - toSubtract;
    },
    '*': (previous, multiplyBy) => {
        return previous * multiplyBy;
    },
    '/': (previous, divideBy) => {
        return previous / divideBy;
    }
};

const OPERATOR_REGEX = /(\*|\+|\/|-)/g;

export default class Calculate {
    static expression(expression) {
        const expressionSplit = expression.split(OPERATOR_REGEX);
        const firstNumber = expressionSplit.shift();

        let operatorToUse = '';

        const result = expressionSplit.reduce((result, value) => {
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
            return 0;
        }

        return result;
    }
}
