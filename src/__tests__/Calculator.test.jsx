import React from 'react';
import Calculator from '../Calculator';
import { render, cleanup, fireEvent } from 'react-testing-library';

describe('Calculator', () => {

    afterEach(cleanup);

    test('output is initially set to 0', () => {
        const { getByTestId } = render(<Calculator />)
        expect(getByTestId('ee-result__box').value).toEqual("0");
    });

    test('digit buttons are available and clickable', () => {
        const {getByText, getByTestId} = render(<Calculator />)

        const availableDigits = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0'];

        availableDigits.forEach(digit => {
          const digitButton = getByText(digit)
          fireEvent.click(digitButton);
        })

        expect(getByTestId('ee-result__box').value).toEqual("9876543210");
      });

    test('can use a decimal point', () => {
        const { getByTestId, getByText } = render(<Calculator />)

        fireEvent.click(getByText('1'))
        fireEvent.click(getByText('.'))
        fireEvent.click(getByText('6'))
        fireEvent.click(getByText('6'))
        fireEvent.click(getByText('6'))

        expect(getByTestId('ee-result__box').value).toEqual("1.666");
    });

    test('Result is reset on memory clear', () => {
        const { getByTestId, getByText } = render(<Calculator />);

        fireEvent.click(getByText('1'));
        fireEvent.click(getByText('2'));

        expect(getByTestId('ee-result__box').value).toEqual("12");

        fireEvent.click(getByText('AC'));

        expect(getByTestId('ee-result__box').value).toEqual("0");
    });

    test.each([
        [
            '1+1=', '2'
        ],
        [
            '1-1=', '0'
        ],
        [
            '2*2=', '4'
        ],
        [
            '2/2=', '1'
        ],
        [
            '200*2=', '400'
        ],
        [
            '200+200=', '400'
        ],
        [
            '200-100=', '100'
        ],
        [
            '200/2=', '100'
        ],
        [
            '200/0=', '0'
        ]
    ])('The result is correct for the following calculation (%s %s %s)', (expression, expectedValue) => {
        const { getByText, getByTestId } = render(<Calculator />);

        expression.split('').forEach(buttonToClick => {
            fireEvent.click(getByText(buttonToClick));
        });

        expect(getByTestId('ee-result__box').value).toEqual(expectedValue);
    });

    test('Only one decimal point can be used for a number.', () => {
        const { getByText, getByTestId } = render(<Calculator />);

        const decimalButton = getByText('.');
        const oneButton = getByText('1');

        fireEvent.click(oneButton);
        fireEvent.click(decimalButton);
        fireEvent.click(oneButton);
        fireEvent.click(decimalButton);
        fireEvent.click(oneButton);

        expect(getByTestId('ee-result__box').value).toEqual("1.11");
    });
});
