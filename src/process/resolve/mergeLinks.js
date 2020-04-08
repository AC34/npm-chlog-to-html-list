/**
 * 
 * @param {object} obj 
 * @return {object}
 */
function mergeLinks(blocks){
  for(var i in blocks){
    if(!blocks[i].link)continue;
    if(!blocks[i].version)continue;
    var index = getIndexByVersion(blocks,blocks[i].version); 
    if(index==-1)continue;//not found
    //move as link property 
    blocks[index].link = blocks[i].link;
    //delete the link property
    delete blocks[i];
  }
  return blocks;
}
/**
 * 
 * @param {object} obj 
 * @param {string} version 
 * @param {number} 0 to n or -1 on failure.
 */
function getIndexByVersion(obj,version){
  for(var i in obj){
    if(obj.version===version){
      return i;
    }
  }
  return -1;
}

module.exports = mergeLinks;