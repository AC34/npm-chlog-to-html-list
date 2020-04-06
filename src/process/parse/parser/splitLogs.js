function splitLogs(log){
  //formatting
  var lines = trimAllLines(log);
  //parse into blocks
  return blocks = parseIntoBlocks(lines);
}

function trimAllLines(log){
  var trim = require("./util/trim");
  log = log.replace(new RegExp("\\r\\n","g"),"\n");
  var lines = log.split("\n"); 
  for(var i in lines){
    lines[i] = trim(lines[i]);
  } 
  return lines;
}

function parseIntoBlocks(lines){
  var blocks = [];
  var current = "";
  var isSectionStart = require("./util/isSectionStart");
  for(var i in lines){
    var line = lines[i];
    if(isSectionStart(line)){
      if(current!==""){
        //dump old line
        blocks.push(current);
      }
      //initialize
      current = line;
    }else{
      //keep adding lines
      current +="\n"+line;
    }
  }
  return blocks;
}

module.exports = splitLogs;