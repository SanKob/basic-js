const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let { repeatTimes, separator = '+', addition = '', additionRepeatTimes, 
  additionSeparator = '|' } = options;
        
    let newStr = addition;
   
   for ( let i = 1; i < additionRepeatTimes; i++) {
     newStr = newStr + additionSeparator + addition;
   }
   let result = str + newStr;
    for (let i = 1; i < repeatTimes; i++) {
      result = result + separator + str + newStr;
    }
    return result;
 
};
  