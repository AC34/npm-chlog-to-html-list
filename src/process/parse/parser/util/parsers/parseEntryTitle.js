/**
 * 
 * @param {string} line 
 * @return {string} parsed_line
 */
function parseEntryTitle(line){
  var ret = trimSharps(line).trim();  
  return ret;
}
function trimSharps(line){
  if(line.startsWith("#")){
    line = line.replace("#","");
    return trimSharps(line);
  }
  return line;
}

module.exports = parseEntryTitle;