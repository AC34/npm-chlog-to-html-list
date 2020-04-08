/**
 * parses File into substitution object.
 * @param {string} log_file
 * @param {object} msgs message object 
 * @return {object} substitution object.
 * return object has "sections" as 
 */
function parseLogFile(log_file,msgs){
  var ret = {};
  //return an empty object
  if(!isValidLogFile(log_file,msgs)){
    return {};
  }
  //returning
  return parseIntoBlocks(log_file); 
}

function parseIntoBlocks(log_file,msgs){
  //prepare
  var splitLogs = require("./parse/parser/splitLogs"); 
  var parseBlocks = require("./parse/parseBlocks");
  var resolveBlocks = require("./resolve/resolveBlocks");
  //string into blocks of strings
  var blocks_strs = splitLogs(log_file,msgs);
  //string blocks into objects(object)
  var blocks = parseBlocks(blocks_strs); 
  //resolve details of gathered information
  blocks = resolveBlocks(blocks);
  //console.log("blocks:"+JSON.stringify(blocks,null," "));
  return blocks; 
}

/**
 * validstes log file.
 * @param {string} log_file 
 * @param {object} msgs 
 * @return {boolean} valid
 */
function isValidLogFile(log_file,msgs){
  if(!log_file){
    console.log(msgs["empty-log"]());
    return false;
  }
  if(log_file===""){
    console.log(msgs["empty-log"]());
    return false;
  }
  if(log_file.indexOf("[")===-1){
    //no section
    console.log(msgs["invalid-log"]());
    return false;
  } 
  return true;
} 

module.exports = parseLogFile;