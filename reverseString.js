const reverseString = (str) => {
  const myArr = str.split('');
  const reversedArr = myArr.reverse();
  console.log(reversedArr.join(''));
  return reversedArr.join('');
};

module.exports = reverseString;
