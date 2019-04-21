import React from 'react';
import Button from '../../components/Button';
import {
    render,
    cleanup,
    fireEvent
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

    test('Call event on button click button.', () => {
        const eventCallback = jest.fn();

        const {
            getByTestId, debug
        } = render(<Button onClick={eventCallback}>+</Button>);

        fireEvent.click(getByTestId('ee-button'));
        expect(eventCallback).toHaveBeenCalled();
    });
});
