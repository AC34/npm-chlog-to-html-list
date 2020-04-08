/**
 * @param {object} obj 
 * @return {object}
 */
function resolveBlocks(obj){
  var mergeLinks = require("./mergeLinks");
  var resolveDates = require("./resolveDates");
  //merge links to each version's objects
  obj = mergeLinks(obj);
  //resolve issue dates
  obj = resolveDates(obj); 
  //console.log("resolved:"+JSON.stringify(obj,null," "));
  return obj;
}

module.exports = resolveBlocks;