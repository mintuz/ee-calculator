import React from 'react';
import Result from '../../components/Result';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

describe('Result', () => {

    afterEach(cleanup);
    test('Display result to the user.', () => {
        const { getByTestId } = render(
            <Result value={20} />,
        );
        expect(getByTestId('ee-result__box').value).toEqual("20");
    });

    test('Result input has a accessible label.', () => {
        const { getByLabelText } = render(
            <Result value={20} />,
        );
        expect(getByLabelText('Result:')).toBeInTheDocument();
    });
});
