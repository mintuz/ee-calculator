import Calculate from '../../libs/calculate';

describe('Calculate', () => {
    test('Should add value to previous value', () => {
        expect(Calculate.add(10, 10)).toEqual(20);
    });

    test('Should subtract value from previous value', () => {
        expect(Calculate.subtract(10, 10)).toEqual(0);
    });

    test('Should multiply values', () => {
        expect(Calculate.multiply(10, 10)).toEqual(100);
    });
});
