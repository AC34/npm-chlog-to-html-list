/**
 * 
 * @param {string} date_text 
 * @param {string} date_string
 */
function parseDate(date_text){
  var exp = new RegExp(/[0-9]{1,4}\-[0-9]{1,2}\-[0-9]{1,4}/);
  return date_text.match(exp);
}

module.exports = parseDate;