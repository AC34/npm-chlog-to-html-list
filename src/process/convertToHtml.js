/**
 * 
 * @param {array} parsed_object 
 * @param {object} options 
 * @param {object} project_info 
 * @param {object} msgs 
 */
function convertToHtml(parsed_object,args,msgs){
  var makeHtml = require("./convert/util/makeHtml");
  var html = "";
  for(var i in parsed_object){
    var obj = parsed_object[i];
    var section = "";
    //version
    if(obj.version_text){
      section+=makeHtml(args.section_header_element,obj.version_text,{});
    }
    //version_text 
    if(obj.version_text){
      section+=makeHtml(args.section_header_element,obj.version_text,{});
    }
    //date
    //Added
    if(obj.Added){
      section+=makeHtml(args.entry_element,obj.Added,{});
    }
    //Changed
    if(obj.Changed){
      section+=makeHtml(args.entry_element,obj.Changed,{});
    }
    //Deprecated
    if(obj.Deprecated){
      section+=makeHtml(args.entry_element,obj.Deprecated,{});
    }
    //Removed
    if(obj.Removed){
      section+=makeHtml(args.entry_element,obj.Removed,{});
    }
    //Fixed
    if(obj.Fixed){
      section+=makeHtml(args.entry_element,obj.Fixed,{});
    }
    //Security
    if(obj.Security){
      section+=makeHtml(args.entry_element,obj.Security,{});
    }
    //link
    if(obj.link){
      section+=makeHtml(args.entry_element,obj.link,{});
    }
    //wrap by section
    section = makeHtml(args.section_elemenet,section,{});
    //var section = makeHtml(args.section_element,"",{});
    //wrap by li
    section = makeHtml("li",section,{});
    //append to html
    html += section;
  }
  //wrap by li wrapper
  html = makeHtml(args.list_type,html,{id:args.list_id});
  return html;
}


module.exports = convertToHtml;