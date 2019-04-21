import React from 'react';
import Result from '../../components/Result';
import { render, cleanup } from 'react-testing-library';

describe('Result', () => {

    afterEach(cleanup);
    test('Display result to the user.', () => {
        const { getByTestId } = render(
            <Result value={20} />,
        );
        expect(getByTestId('ee-result-box').value).toEqual("20");
    });
});
