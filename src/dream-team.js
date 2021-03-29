const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members) {
  if(!Array.isArray(members)) return false

 
 let result=""
 members=members.filter(isString)

 for(let i of members){
  result+=i.trim().split("")[0]
 }
 return result.toUpperCase().split("").sort().join("")

};

function isString(e){
  if(typeof e=='string')
  return true
}
