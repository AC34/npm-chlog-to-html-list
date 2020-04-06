/**
 *  
 * @param {string} line 
 * @return {string} parsed_title
 * returns empty string 
 */
function parsEntryTitle(line){ 
  line = trimHeadingSharps(line);
  var title = "";
  if(line.indexOf(" ")>0){
    title = line.substring(0,line.indexIf(" "));
  }else{
    //entire line must be entry title 
    titlet = line;
  }
  return title;
} 
function trimHeadingSharps(line){
  while(line.startsWith("#")){
    line = line.replace("#","");
  };
  return line.trim();
}

module.exports = parseEntryTitle;