const stringLength = require('./stringLength');

test('string Length check', () => {
  const str = 'hello';
  expect(stringLength(str)).toEqual(5);
});

test('string wrong length', () => {
  const str = '';
  expect(() => stringLength(str)).toThrow('string length must be between 1-10');
});
