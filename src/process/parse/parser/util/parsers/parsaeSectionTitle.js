/**
 *  
 * @param {string} line 
 * @return {string} parsed_title
 * returns empty string 
 */
function parseEntryTitle(line){ 
  line = trimHeadingSharps(line);
  line = stripVersion(line);
  var title = "";
  if(line.indexOf(" ")>0){
    title = line.substring(0,line.indexOf(" "));
  }else{
    //entire line must be entry title 
    title = line;
  }
  return title;
}
function trimHeadingSharps(line){
  while(line.startsWith("#")){
    line = line.replace("#","");
  };
  return line.trim();
}
function stripVersion(line){
 if(line.indexOf("]")>-1){
   line = line.substring(line.indexOf("]")+1,line.length); 
 }
}
module.exports = parseEntryTitle;