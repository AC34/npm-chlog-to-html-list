/**
 * 
 * @param {object} obj 
 * @return {object}
 */
function resolveBlocks(obj){
  var mergeLinks = require("./mergeLinks");
  var resolveDates = require("./resolveDates");
  //merge links to each version's objects
  obj = mergeLinks(obj);
  console.log("resolved:"+JSON.stringify(obj,null," "));
  //resolve issue dates
  obj = resolveDates(obj); 
  return obj;
}

module.exports = resolveBlocks;