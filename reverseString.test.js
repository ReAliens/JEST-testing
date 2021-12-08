const reverseString = require('./reverseString');

test('check reversed string', () => {
  const str = 'hello';
  const result = reverseString(str);
  expect(result).toBe('olleh');
});
