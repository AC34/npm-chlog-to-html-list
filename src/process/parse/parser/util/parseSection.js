/**
 *
 * @param {string} block_str
 * @return {object} parsed object
 * parsed object may contain keys below:
 * version,version_text
 */
function parseSection(block_str) {
  var isLinkEntry = require("./str_detect/isLinkEntryLine");
  var parseLinkVersion = require("./parsers/parseLinkVersion");
  var parseLink = require("./parsers/parseLink");
  var obj = {};
  if(isLinkEntry(block_str)){
    var link_version = parseLinkVersion(block_str); 
    var link = parseLink(block_str);
    obj["version"] = link_version;
    obj["link"] = link;
    return obj;
  }
  //create link only object
  obj.version = parseVersion(block_str);
  obj.version_text = parseVersionText(block_str);
  var the_rest = parseTheRest(block_str);
  obj = Object.assign(obj, the_rest);
  return obj;
}
function parseVersion(block_str) {
  var line = block_str.split("\n")[0];
  var start = line.indexOf("[") + 1;
  var end = line.indexOf("]");
  var v = line.substring(start, end);
  return v;
}
function parseVersionText(block_str) {
  var line = block_str.split("\n")[0];
  line = line.trim();
  var start = line.indexOf("[") + 1;
  return line.substring(start, line.length);
}
function parseTheRest(block_str) {
  var isEntryTitle = require("./str_detect/isEntryTitle");
  var parseEntryTitle = require("./parsers/parseEntryTitle");
  var parseContentLine = require("./parsers/parseContentLine");

  var lines = block_str.split("\n");
  var len = lines.length;
  var global_entry = "global";
  var entry = "void";
  var obj = {};
  //first line is already being parsed.
  for (var i = 1; i < len; i++) {
    var line = lines[i];
    if (isEntryTitle(line)) {
      //update entry
      entry = parseEntryTitle(line);
      //initialize
      obj[entry] = [];
      continue;
    }
    //treat the rest as content
    var c_line = parseContentLine(line);
    if(obj[entry]){
      obj[entry].push(c_line);
    }else{
      //initialize
      if(!obj[global_entry])obj[global_entry] = [];
      obj[global_entry].push(c_line);
    }
  }
  return obj;
}

module.exports = parseSection;
