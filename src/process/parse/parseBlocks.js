/**
 * makes blocks of strings into objects.
 * objects will be returned in an array.
 * @param {string} blocks_strs 
 * @return {array} array of objects
 */
function parseBlocks(blocks_strs){
  var parseSection = require("./parser/util/parseSection");
  var blocks = [];
  for(var i in blocks_strs){
    var str = blocks_strs[i];
    var block = parseSection(str);  
    block = Object.assign({},block,parseSection(blocks_strs[i]));
    blocks.push(block);
  }
  return blocks;
}

module.exports = parseBlocks;