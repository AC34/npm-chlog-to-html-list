/**
 * parses File into substitution object.
 * @param {string} log_file
 * @param {object} msgs message object 
 * @return {object} substitution object.
 * return object has "sections" as 
 */
function parseLogFile(log_file,msgs){
  var ret = {};
  var blocks = parseIntoBlocks(log_file); 
    
}

function parseIntoBlocks(msgs){
  var splitLogs = require("./parse/parser/splitLogs"); 
  var trim = require("./parse/parser/trim");
  return splitLogs(trim);
}

function validateLogFile(log_file,msgs){
  if(log_file===""){
    console.log(msgs[""]);
  }
} 

module.exports = parseLogFile;