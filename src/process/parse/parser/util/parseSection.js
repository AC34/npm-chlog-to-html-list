/**
 *     
 * @param {string} block_str 
 * @return {object} parsed object
 * parsed object may contain keys below:
 * version,version_text
 */
function parseSection(block_str){
  var obj = {};
  obj.version = parseVersion(block_str);
  obj.version_text = parseVersionText(block_str);     
  return obj;
}
function parseVersion(block_str){
  var line = block_str.split("\n")[0];
  var start = line.indexOf("[")+1;
  var end = line.indexOf("]");
  var v = line.substring(start,end);
  return v;
}
function parseVersionText(block_str){
  var line = block_str.split("\n")[0];
  line =line.trim();
  var start = line.indexOf("[")+1; 
  return line.substring(start,line.length);
}


module.exports = parseSection;