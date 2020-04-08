/**
 * 
 * @param {string} blocks_strs 
 * 
 */
function parseBlocks(blocks_strs){
  var parseSection = require("./parser/util/parseSection");
  var blocks = {};
  for(var i in blocks_strs){
    var str = blocks_strs[i];
    var block = parseSection(str);  
    //unknown type. just ignoring. 
    block = Object.assign({},block,parseSection(blocks_strs[i]));
  }
  return blocks;
}

module.exports = parseBlocks;