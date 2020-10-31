const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  if (!Array.isArray(members)) {
    return false;
  }
  let firstCharMembers = [];
  members.forEach((el) => {
  if (typeof el === 'string') {
    firstCharMembers = firstCharMembers.concat(el.trim()[0].toUpperCase());
  }
 }) 
    
 return firstCharMembers.sort().join('');
};


