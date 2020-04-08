/**
 * 
 * @param {string} log 
 * @return {}
 */
function splitLogs(log) {
  //formatting
  var lines = trimAllLines(log);
  //parse into blocks
  return blocks = parseIntoBlocks(lines);
}
/**
 * 
 * @param {string} log 
 * @param {string} log
 */
function trimAllLines(log) {
  var trim = require("./util/trim");
  log = log.replace(new RegExp("\\r\\n", "g"), "\n");
  var lines = log.split("\n");
  for (var i in lines) {
    lines[i] = trim(lines[i]);
  }
  return lines;
}
/**
 * 
 * @param {array} lines 
 */
function parseIntoBlocks(lines) {
  var blocks = [];
  var current = "";
  var isSectionStart = require("./util/str_detect/isSectionStart");
  var isLinkEntryLine = require("./util/str_detect/isLinkEntryLine");
  for (var i in lines) {
    var line = lines[i];
    //skip empty line
    if(isEmptyLine(line)){
      continue;
    }
    if(isLinkEntryLine(line)){
      if(current!==""){
        blocks.push(current);
      }
      current = "";
      blocks.push(line); 
      continue;
    }
    //new Section
    if (isSectionStart(line)) {
      //dump old line
      blocks.push(current);
      //initialize
      current = line;
      continue;
    } 
    //keep adding lines
    if(current===""){
      current = line;
      continue;
    }else{
      current += "\n" + line;
    }
  }
  return blocks;
}
/**
 * @param {string} line 
 * @return {string}
 */
function isEmptyLine(line){
  return line.trim()==="";
}
module.exports = splitLogs;