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
  locale = locale===""?"en_US":locale;

  try{
    var lang = locale.split("_")[0];
    var country= locale.split("_")[1];
    var msg_file = __dirname+sep+"messages"+sep+lang+sep+country+".js";
    var msg = fs.readFileSync(msg_file,"UTF-8");
    return msg;
  }catch(e){
    console.log("load failed:"+e);
    return false;
  }
}

module.exports = getMessages;