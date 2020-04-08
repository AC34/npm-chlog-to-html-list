function splitLogs(log) {
  //formatting
  var lines = trimAllLines(log);
  //parse into blocks
  return (blocks = parseIntoBlocks(lines));
}

function trimAllLines(log) {
  var trim = require("./util/trim");
  log = log.replace(new RegExp("\\r\\n", "g"), "\n");
  var lines = log.split("\n");
  for (var i in lines) {
    lines[i] = trim(lines[i]);
  }
  return lines;
}

function parseIntoBlocks(lines) {
  var blocks = [];
  var current = "";
  var index = 0;
  var isSectionStart = require("./util/str_detect/isSectionStart");
  var isEntryTitle = require("./util/str_detect/isEntryTitle");
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
      //console.log("link:"+line);
      continue;
    }
    //new Section
    if (isSectionStart(line)) {
      //console.log("newline:"+line);
      //dump old line
      blocks.push(current);
      //initialize
      current = line;
      continue;
    } 
    //keep adding lines
    if(current===""){
      current = line;
    //console.log("line:"+line);
      continue;
    }else{
      current += "\n" + line;
    //console.log("line:"+line);
    }
  }
  return blocks;
}
function isEmptyLine(line){
  return line.trim()==="";
}
module.exports = splitLogs;