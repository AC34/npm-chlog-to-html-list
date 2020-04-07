/**
 * Empty line will be true.
 * @param {string} line 
 * @return {boolean}
 */
function isContentLine(line){
  if(line==="")return true;
  var starters = ["-"];
  var isSectionLine = false;
  for(var i in starters){
    if(isSectionLine===true)break;
    if(line.startsWith(starters[i])){
      isSectionLine = true;
    }
  }
  return isSectionLine===true?false:true;
}

module.exports = isContentLine;