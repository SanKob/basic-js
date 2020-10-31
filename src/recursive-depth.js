const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth( arr ) {
    if (arr.length === 0) {
      return 1;
    } 
    if (Array.isArray(arr)) {
      return Math.max(...arr.map((el) => this.calculateDepth(el))) + 1;
    }
    return 0;
  }
}
