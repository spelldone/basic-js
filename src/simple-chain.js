const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length
  },
  addLink(value) {
    if (String(value)) {
      this.chain.push('( ' + String(value) + ' )')
      return this
    }
    this.chain.push('( )')
    return this
  },
  removeLink(position) {
    if (!Number.isInteger(position)||position>this.getLength()||position<1) {
      this.chain = []
    throw Error()
    }
    
    this.chain.splice(position - 1, 1)
      return this
  },
  reverseChain() {
    this.chain.reverse();
    return this
  },
  finishChain() {
    const result = this.chain.join('~~')
    this.chain = []
    return result
  }
};

module.exports = chainMaker;
