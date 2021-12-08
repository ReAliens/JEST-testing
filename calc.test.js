const Calc = require('./calc');

describe('add numbers Test', () => {
  test('test calculator throw Error', () => {
    const a = 5;
    const b = '9';
    expect(() => Calc.add(a, b)).toThrow('you can only add numbers');
  });
  test('test calculator Adding', () => {
    const a = 5;
    const b = 9;
    expect(Calc.add(a, b)).toBe(a + b);
  });
  test('test calculator', () => {
    const a = 25;
    const b = 90;
    expect(Calc.add(a, b)).toBe(a + b);
  });
});

describe('substract numbers Test', () => {
  test('test calculator throw Error', () => {
    const a = 5;
    const b = '9';
    expect(() => Calc.substract(a, b)).toThrow(
      'you can only substract numbers',
    );
  });
  test('test calculator substract', () => {
    const a = 5;
    const b = 9;
    expect(Calc.substract(a, b)).toBe(a - b);
  });
  test('test calculator', () => {
    const a = 25;
    const b = 90;
    expect(Calc.substract(a, b)).toBe(a - b);
  });
});

describe('add numbers Test', () => {
  test('test calculator throw Error', () => {
    const a = 5;
    const b = '9';
    expect(() => Calc.multiple(a, b)).toThrow('you can only multiply numbers');
  });
  test('test calculator multiply', () => {
    const a = 5;
    const b = 9;
    expect(Calc.multiple(a, b)).toBe(a * b);
  });
  test('test calculator', () => {
    const a = 25;
    const b = 90;
    expect(Calc.multiple(a, b)).toBe(a * b);
  });
});

describe('divide numbers Test', () => {
  test('test calculator throw Error', () => {
    const a = 5;
    const b = '9';
    expect(() => Calc.division(a, b)).toThrow('you can only divide numbers');
  });
  test('test calculator Adding', () => {
    const a = 5;
    const b = 9;
    expect(Calc.division(a, b)).toBe(a / b);
  });
  test('test calculator', () => {
    const a = 25;
    const b = 90;
    expect(Calc.division(a, b)).toBe(a / b);
  });
});
