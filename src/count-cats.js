const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let arr = matrix.reduce((acc, el) => acc.concat(el), [])
  .filter(el => el === '^^');
  return arr.length;
};
