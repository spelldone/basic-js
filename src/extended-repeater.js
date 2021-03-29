const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  
let opt={
  repeatTimes=1,
  separator='+',
  addition='',
  additionRepeatTimes=1,
  additionSeparator='|'
}=options


str=String(str)
let str1=str

if(repeatTimes===undefined)
return ''

  for(let i=0;i<repeatTimes;i++){
    for(let k=0;k<additionRepeatTimes;k++){
      str+=addition
      str+=additionSeparator
    }
    str=str.substring(0,str.length-additionSeparator.length)
    str+=separator
    str+=str1
  }
  let sep=separator.length
  str=str.substring(0,str.length-sep-str1.length)
  return str
};
  