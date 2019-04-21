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
        expect(eventCallback).toHaveBeenCalledWith('+');
    });

    test('Call event on button click button.', () => {
        const eventCallback = jest.fn();

        const {
            getByTestId, debug
        } = render(<Button onClick={eventCallback}>+</Button>);

        fireEvent.click(getByTestId('ee-button'));
        expect(eventCallback).toHaveBeenCalledWith('+');
    });

    test('Render double span className on button.', () => {
        const {
            getByTestId
        } = render(
            <Button
                double
            >
                AC
            </Button>
        );
        expect(getByTestId('ee-button').classList.contains('ee-o-button--span-double')).toEqual(true);
    });

    test('Render triple span className on button.', () => {
        const {
            getByTestId
        } = render(
            <Button
                triple
            >
                AC
            </Button>
        );
        expect(getByTestId('ee-button').classList.contains('ee-o-button--triple-double')).toEqual(true);
    });

    test('Render attention className as primary on button by default.', () => {
        const {
            getByTestId
        } = render(
            <Button>
                AC
            </Button>
        );
        expect(getByTestId('ee-button').classList.contains('ee-o-button')).toEqual(true);
        expect(getByTestId('ee-button').classList.contains('ee-o-button--primary')).toEqual(true);
    });

    test('Override attention className on button.', () => {
        const {
            getByTestId
        } = render(
            <Button attention="secondary">
                AC
            </Button>
        );
        expect(getByTestId('ee-button').classList.contains('ee-o-button')).toEqual(true);
        expect(getByTestId('ee-button').classList.contains('ee-o-button--secondary')).toEqual(true);
    });
});
