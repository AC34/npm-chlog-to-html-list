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
  var the_rest = parseTheRest(block_str); 
  console.log("the_rest:"+JSON.stringify(the_rest,null," "));
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
function parseTheRest(block_str){
  var parseEntryTitle = require("./entries/parsaeEntryTitle");
  var parserContentLine = require("./entries/parseContentLine");
  var len = block_str.length;
  var entry ="global";
  var obj = {};
  //first line is already being parsed.
  for(var i = 1; i< len;i++) {
    if(isEntryTitleLine){
      //update entry
      entry = parseEntryTitle(block_str[i]);
      //initialize
      obj[entry] = [];
      continue;
    }
    if(isContentLine()){
      var block = parserContentLine([i]); 
      obj[entry].push(block);
      continue;
    }
  }
  return obj;
}

function isEntryTitleLine(line){
  return line.startsWith("#")
}
function isContentLine(line){
  return line.startsWith("#");
}

module.exports = parseSection;