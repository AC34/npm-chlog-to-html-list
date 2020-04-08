/**
 * 
 * @param {string} line 
 * @return {string} line
 */
function parseContentLine(line){
  return trimHeading(line); 
}
function trimHeading(line){
  if(line.startsWith("-")){
    line = line.replace("-","");
    return trimHeading(line);
  }
  if(line.startsWith(" ")){
    line = line.replace(" ","");
    return trimHeading(line);
  }
  return line;
}

module.exports = parseContentLine;