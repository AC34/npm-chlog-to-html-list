/**
 * 
 * @param {object} blocks 
 * @return {object}
 */
function resolveDates(blocks){
  var containsDate = require("./detect/containsDate");
  var parseDate = require("./parse/parseDate");
  blocks.filter((element)=>{
    if(!element.version_text)return element; 
    if(!containsDate(element.version_text))return element;
    element.date = parseDate(element.version_text)[0];
    return element;
  });
  return blocks; 
}

module.exports = resolveDates;