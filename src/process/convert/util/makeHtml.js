/**
 * 
 * @param {string} el 
 * @param {string} content 
 * @param {object} attrs 
 */
function makeHtml(el,content,attrs){
  var html = "<"+el; 
  for(var key in attrs){
    html += " "+key+"=\""+attrs[key]+"\"";
  }
  html += ">"+content+"</"+el+">";
  return html;
}

module.exports = makeHtml;