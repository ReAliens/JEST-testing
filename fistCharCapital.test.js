const capitalizeFirst = require('./fistCharCapital');

describe('capitalize first letter', () => {
  test('throw error if white spaces', () => {
    const str = 'hello world';
    expect(() => capitalizeFirst(str)).toThrow('add only one Word');
  });

  test('run function properly', () => {
    const str = 'hello';
    expect(capitalizeFirst(str)).toBe('Hello');
  });
});
