/**
 * parses File into substitution object.
 * The substituition oboject is an array of objects.
 * objects in the array have at least version and version_text key.
 * @param {string} log_file
 * @param {object} msgs message object 
 * @return {array} substitution object.
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
/**
 * Splits log file by new section and links
 * @param {string} log_file 
 * @param {object} msgs 
 * @param {array} blocks_str
 */
function parseIntoBlocks(log_file,msgs){
  //prepare
  var splitLogs = require("./parse/parser/splitLogs"); 
  var parseBlocks = require("./parse/parseBlocks");
  var resolveBlocks = require("./resolve/resolveBlocks");
  //string into an array of strings
  var blocks_strs = splitLogs(log_file,msgs);
  //string blocks into objects(object)
  var blocks = parseBlocks(blocks_strs); 
  //resolve details of gathered information
  //parsed links of parseBlocks() will be mereged to whwere it should be.
  blocks = resolveBlocks(blocks);
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