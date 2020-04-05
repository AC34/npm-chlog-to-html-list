function splitLogs(log){
  var trim = require("./trim");
  
  var lines = splitByLF(log); 
  for(var i in lines){
    var line = trim(lines[i]);
    console.log("line:"+i+":"+line);
  } 
}
function splitByLF(log){
  //convert \r\n lf to \n
  log = log.replace(new RegExp("\\r\\n","g"),"\n");
  return log.split("\n");
}


module.exports = splitLogs;