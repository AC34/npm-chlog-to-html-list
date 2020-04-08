/**
 * 
 * @param {string} line 
 * @return {boolean}
 */
function isEntryTitle(line){
  var exp = new RegExp(/^#{1,6}\s*added|changed|deprecated|removed|fixed|Security.*/);
  if(line.toLowerCase().match(exp)===null){
    return false;
  }
  return true;
}

module.exports = isEntryTitle;