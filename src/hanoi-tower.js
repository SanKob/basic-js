const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed) {
  let obj = { 
    turns: Math.pow(2, disksNumber) - 1,
    seconds: (3600/turnsSpeed)
  }
   obj.seconds = Math.floor(obj.seconds * obj.turns);
  return obj;
};
