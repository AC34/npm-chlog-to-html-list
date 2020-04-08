/**
 * 
 * @param {string} line 
 * @preturn {string}
 */
function isLinkEntryLine(line){
  var exp = new RegExp(/^\[.*\]\:\s*http.*/);
  if(line.match(exp)===null){
     return false;
  }     
  return true;
}

module.exports = isLinkEntryLine;