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
  var splitLogs = require("./parse/parser/splitLogs"); 
  var trim = require("./parse/parser/trim");
   
  return splitLogs(trim(log_file,msgs));
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
  if(log_file.indexOf(/[.*].*/g)===-1){
    //no section
    console.log(msgs["invalid-log"]());
    return false;
  } 
  return true;
} 

module.exports = parseLogFile;