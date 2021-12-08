class Calc {
  static add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
      return a + b;
    } else {
      throw new Error('you can only add numbers');
    }
  }
  static substract(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
      return a - b;
    } else {
      throw new Error('you can only substract numbers');
    }
  }
  static multiple(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
      return a * b;
    } else {
      throw new Error('you can only multiply numbers');
    }
  }
  static division(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
      return a / b;
    } else {
      throw new Error('you can only divide numbers');
    }
  }
}

module.exports = Calc;
