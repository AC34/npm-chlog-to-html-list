/**
 * 
 * @param {string} line 
 * @return {boolean} 
 */
function isDate(line){
  //e.g. both matches 2014/02/20 <-> 20/02/2014 
  var exp = new RegExp(/.*[0-9]{1,4}\-[0-9]{1,2}\-[0-9]{1,4}.*/);
  if(line.match(exp)===null){
    return false;
  }
  return true;
}

module.exports = isDate;