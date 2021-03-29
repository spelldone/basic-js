const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr,level=1,depth=new Array()) {
    depth.push(level)
  
    for(let i of arr){
      if(Array.isArray(i))
      this.calculateDepth(i,level+1,depth)
    }
    let max=depth[0]
    for(let t=0;t<depth.length;t++){
      if(depth[t]>max)
      max=depth[t]
    }
    return max
    


    
  }
};