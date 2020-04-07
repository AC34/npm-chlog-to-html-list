/**
 * 
 * @param {string} line 
 */
function isLinkEntry(line){
  var exp = new RegExp(/^[.*]:\s*http.*/);
  if(line.match(exp)===null){
     return false;
  }     
  return true;
}

module.exports = isLinkEntry;