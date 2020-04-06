/**
 * Trims unnecessary headaing/trailing string patterns.
 * Paramter string must be a line.
 * @param {string} line
 * @return {string} trimed_line
 */
function trim(line){
  //tabs
  line = trimChars(line,"\t");
  //spaces
  line = trimChars(line," ");
  return line;
}

function trimChars(line,character){
  //trim spaces first
  if(line.startsWith(character)){
    line = line.substring(1,line.length);
    return trimChars(line,character);
  }
  if(line.endsWith(character)){
    line = line.substring(0,line.length);
    return trimChars(line,character);
  }
  return line;
}

module.exports = trim;