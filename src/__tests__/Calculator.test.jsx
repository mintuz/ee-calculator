import React from 'react';
import Calculator from '../Calculator';
import { render, cleanup } from 'react-testing-library';

describe('Calculator', () => {

    afterEach(cleanup);

    test('output is initially set to 0', () => {
        const { getByTestId } = render(<Calculator />)
        expect(getByTestId('ee-result__box').value).toEqual("0");
    });
});
