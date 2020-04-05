/**
 * Trims unnecessary headaing/trailing string patterns.
 * Paramter string must be a line.
 * @param {string} line
 * @return {string} trimed_line
 */
function trim(line){
  //slashes
  line = trimChars("/");
  //*
  line = trimChars("*"); 
  //final spaces
  line = trimChars(" ");
  return line;
}
function trimChars(line,character){
  //trim spaces first
  line = trimChars(line," ");
  if(line.startsWith(character)){
    line = line.substring(1,line.length);
    return trimSpaces(line,character);
  }
  if(line.endsWith(character)){
    line = line.substring(0,line.length-1);
    return trimSpaces(line,character);
  }
  return line;
}

module.exports = trim;