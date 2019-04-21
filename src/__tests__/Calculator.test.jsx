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
});
