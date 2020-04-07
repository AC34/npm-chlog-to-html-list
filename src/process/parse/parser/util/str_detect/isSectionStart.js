/**
 *    
 * @param {string} line 
 * @return {boolean}
 */
function isSectionStart(line){
  if(isNewSection(line)){
    return true;
  }else{
    return false;
  }
}
function isNewSection(line){
  var exp = new RegExp(/^#{1,6}\s*\[.*.*\].*/,"");
  if(line.match(exp)===null){
    return false;
  }
  return true;
}

module.exports = isSectionStart;