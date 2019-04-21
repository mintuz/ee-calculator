import Calculate from '../../libs/calculate';

describe('Calculate', () => {
    test('Should add value to previous value', () => {
        expect(Calculate.add(10, 10)).toEqual(20);
    });
});
