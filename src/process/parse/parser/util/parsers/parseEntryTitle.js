/**
 * @param {string} line 
 * @return {string} parsed_line
 */
function parseEntryTitle(line){
  var ret = stripHeadingSharps(line).trim();  
  return ret;
}
function stripHeadingSharps(line){
  if(line.startsWith("#")){
    line = line.replace("#","");
    return stripHeadingSharps(line);
  }
  return line;
}

module.exports = parseEntryTitle;