/**
 * Empty line will be true.
 * @param {string} line 
 * @return {boolean}
 */
function isNonSectioLine(line){
  if(line==="")return true;
  var starters = ["-","#"];
  var isSectionLine = false;
  for(var i in starters){
    if(isSectionLine===true)break;
    if(line.startsWith(starter[i])){
      isSectionLine = true;
    }
  }
  return isSectionLine===true?false:true;
}

module.exports = isNonSectioLine;