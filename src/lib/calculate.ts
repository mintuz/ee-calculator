export type Operators = "*" | "/" | "+" | "-";

type CalculateMethods = Record<Operators, (x: number, y: number) => number>;

const calculateMapping: CalculateMethods = {
  "*": (x: number, y: number) => {
    return x * y;
  },
  "/": (x: number, y: number) => {
    return x / y;
  },
  "+": (x: number, y: number) => {
    return x + y;
  },
  "-": (x: number, y: number) => {
    return x - y;
  },
};

const OPERATOR_REGEX = /(\*|\+|\/|-)/g;

const isOperator = (value: any): value is Operators => {
  return OPERATOR_REGEX.test(value);
};

export const calculate = (expression: string): number => {
  const [firstNumber, ...expressionSplit] = expression.split(OPERATOR_REGEX);

  let operatorToUse: Operators | "" = "";

  const result: number = expressionSplit.reduce((result, value) => {
    if (isOperator(value)) {
      operatorToUse = value;
      return result;
    }

    if (operatorToUse) {
      return calculateMapping[operatorToUse](Number(result), Number(value));
    }

    return Number(value);
  }, Number(firstNumber));

  if (Number.isNaN(result) || !Number.isFinite(result)) {
    return 0;
  }

  return result;
};
