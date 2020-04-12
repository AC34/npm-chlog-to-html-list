/**
 * 
 * @param {string} link_line 
 * @return {string} 
 */
function parseLink(link_line){
  console.log("parselink:"+link_line);
  var start = link_line.indexOf(":");
  //user might forget :
  if(start===-1)start = link_line.indexOf("]");
  start++;
  return link_line.substring(start,link_line.length);
}

module.exports = parseLink;