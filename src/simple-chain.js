const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    return this.link.length();
  },
  addLink(value) {
    if (this.link === undefined) {this.link = ''};
    if (this.link !== '') {this.link = this.link + '~~'}
    this.link = this.link + `( ${value} )`;
    return this;
  },
  removeLink(position) {
    
    if (isNaN(position) || !Number.isInteger(position) || position > this.link.length) {
      this.link = '';
      return THROWN;
    }
    this.link = this.link.split('~~');
    this.link.splice(position-1, 1);
    this.link = this.link.join('~~');
    return this;
  },
  reverseChain() {
    this.link = this.link.split('~~').reverse().join('~~');
    return this;
  },
  finishChain() {
    let str = this.link;
    this.link = '';
    return str;
  }
};

module.exports = chainMaker;
