/**
 * 
 * @param {string} link_line 
 * @return {string}
 */
function parseLinkVersion(link_line){
  var start = link_line.indexOf("[");
  var end = link_line.indexOf("]");
  return link_line.substring(start,end);
}
module.exports = parseLinkVersion;