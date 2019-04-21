import React from 'react';
import Button from '../../components/Button';
import {
    render,
    cleanup
} from 'react-testing-library';
import 'jest-dom/extend-expect';

describe('Calculator Button', () => {

    afterEach(cleanup);

    test('Display button action to the user.', () => {
        const {
            getByText
        } = render(<Button>+</Button>);
        expect(getByText('+')).toBeInTheDocument();
    });
});
