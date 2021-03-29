const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  matrix=matrix.filter(hasCat)
  let counter=0;
  for(let k=0;k<matrix.length;k++){
    for(let d=0;d<matrix[k].length;d++){
      if(matrix[k][d]=="^^")
      counter++
    }
  }
  return counter
  
};
function hasCat(e){
  for(let i=0;i<e.length;i++){
    if(e[i]=="^^")
    return true
  }
  return false
}
