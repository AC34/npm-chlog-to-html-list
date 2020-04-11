/**
 * resolves content dependencies between objects.
 * e.g. link object will be merged by its matching object by version.
 * @param {object} obj 
 * @return {object}
 */
function resolveBlocks(obj){
  //prepare
  var mergeLinks = require("./mergeLinks");
  var resolveDates = require("./resolveDates");
  //merge links to each version's objects
  obj = mergeLinks(obj);
  //resolve issue dates
  obj = resolveDates(obj); 
  return obj;
}

module.exports = resolveBlocks;