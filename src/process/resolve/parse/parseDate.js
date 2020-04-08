/**
 * Parses date sequence.
 * both 0000-00-00 and 00-00-0000 can be parsed.
 * matching pattern is very loose(in case of changelog typos)
 * @param {string} date_text 
 * @param {string} date_string
 */
function parseDate(date_text){

  var exp = new RegExp(/[0-9]{1,4}\-[0-9]{1,2}\-[0-9]{1,4}/);
  return date_text.match(exp);
}

module.exports = parseDate;