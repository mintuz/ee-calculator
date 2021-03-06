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
        ],
        [
            '2+2=+2=', '6'
        ],
        [
            '2+0.5=', '2.5'
        ],
        [
            '2-0.5=', '1.5'
        ],
        [
            '2-3=', '-1'
        ],
        [
            '2-3=+1=', '0'
        ],
        [
            '1.5+1.5=', '3'
        ]
    ])('The calculation is correct for the following button presses (%s)', (expression, expectedValue) => {
        const { getByText, getByTestId } = render(<Calculator />);

        expression.split('').forEach(buttonToClick => {
            fireEvent.click(getByText(buttonToClick));
        });

        expect(getByTestId('ee-result__box').value).toEqual(expectedValue);
    });

    test('Trailing zeros are removed.', () => {
        const {getByTestId, getByText} = render(<Calculator />);

        const zeroDigit = getByText('0');
        const oneDigit = getByText('1');

        fireEvent.click(zeroDigit)
        fireEvent.click(zeroDigit)
        expect(getByTestId('ee-result__box').value).toEqual("0");

        fireEvent.click(oneDigit)
        expect(getByTestId('ee-result__box').value).toEqual("1");
    });
});
