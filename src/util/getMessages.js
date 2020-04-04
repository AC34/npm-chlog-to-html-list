/**
 * Tries to load message object.
 * returns false on not found.
 * @param {string} locale 
 * @return {boolean|object} false or message object
 */
function getMessages(locale=""){
  var fs = require("fs");
  var sep = require("path").sep;
  //initialize
  locale = locale===""?"en_US":lang;
  try{
    var ln = lang.split("_")[0];
    var cn = lang.split("_")[1];
    var msg_file = __dirname+sep+"messages"+sep+ln+cn+".js";
    console.log("loading message file:"+msg_file);
    var msg = fs.readFileSync(msg_file,"UTF-8");
    return msg;
  }catch(e){
    return false;
  }
}

module.exports = getMessages();