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
  var isSectionStart = require("./util/str_detect/isSectionStart");
  var isLinkEntryLine = require("./util/str_detect/isLinkEntryLine");
  var isContentLine = require("./util/str_detect/isContentLine");
  for (var i in lines) {
    var line = lines[i];
    //section number with link
    if (isLinkEntryLine(line)) {
      //just push the last line
      blocks.push(current);
      continue;
    }
    //new Entry
    if (isSectionStart(line)) {
      if (current !== "") {
        //dump old line
        blocks.push(current);
      }
      //initialize
      current = line;
      continue;
    } 
    if(isContentLine(line)){
      //keep adding lines
      current += "\n" + line;
    }

    //line thats unknown
  }
  return blocks;
}

module.exports = splitLogs;
