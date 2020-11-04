import { increment, decrement } from '../Calc';
test('Calc', () => {
  expect(increment(1)).toEqual(2);
  expect(decrement(1)).toEqual(0);
});
