/**
 * Judges wether the string line contains date sequence.
 * date sequence can be both: 0000-00-00 and 00-00-0000
 * @param {string} line 
 * @return {boolean} 
 */
function isDate(line){
  var exp = new RegExp(/.*[0-9]{1,4}\-[0-9]{1,2}\-[0-9]{1,4}.*/);
  if(line.match(exp)===null){
    return false;
  }
  return true;
}

module.exports = isDate;