import { Greeter } from '../Greatnes';
test('My Greeter', () => {
  expect(Greeter('Carl')).toBe('Hello Carl');
});
