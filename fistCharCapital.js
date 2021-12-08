const capitalizeFirst = (str) => {
  const hasWhiteSpaces = /\s/.test(str);
  if (hasWhiteSpaces) {
    throw new Error('add only one Word');
  } else {
    const result = str.replace(/\b\w/g, (letter) => letter.toUpperCase());
    return result;
  }
};

module.exports = capitalizeFirst;
