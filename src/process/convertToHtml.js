var makeHtml = require("./convert/makeHtml");
/**
 * @param {array} parsed_object
 * @param {object} options
 * @param {object} project_info
 * @param {object} Console 
 */
function convertToHtml(parsed_object, args, Console) {
  var html = "";
  //console.log("parsesd_object",JSON.stringify(parsed_object,null," "));
  for (var i in parsed_object) {
    var obj = parsed_object[i];
    var section = "";
    if(obj.version!==undefined){
      section += makeHtml(args.section_header_element, obj.version, {});
    }
    //version_text
    if (obj.version_text!==undefined) {
      section += makeHtml(args.section_header_element, obj.version_text, {});
    }
    if(obj.global){
      for(var k in obj.global){
        section += makeHtml(args.entry_element,obj.global[k],{});
      }
    }
    //entries
    section = convertEntries(obj,args,section);
    //link
    if (obj.link) {
      section += makeHtml(args.link_element, obj.link, {});
    }
    //wrap by section
    section = makeHtml(args.section_element, section, {});
    //var section = makeHtml(args.section_element,"",{});
    //wrap by li
    section = makeHtml("li", section, {});
    //append to html
    html += section;
  }
  //wrap by li wrapper
  html = makeHtml(args.list_type, html, { id: args.list_id,class:args.list_class});
  return html;
}

/**
 * @param {object} obj 
 * @param {string} section 
 */
function convertEntries(obj,args,section) {
  //Added
  if (obj.Added) {
    section+=makeHtml(args.entry_title_element,"Added",{});
    for(var i in obj.Added){
      section += makeHtml(args.entry_element, obj.Added[i], {});
    }
  }
  //Changed
  if (obj.Changed) {
    section+=makeHtml(args.entry_title_element,"Changed",{});
    for(var i in obj.Changed){
      section += makeHtml(args.entry_element, obj.Changed[i], {});
    }
  }
  //Deprecated
  if (obj.Deprecated) {
    section+=makeHtml(args.entry_title_element,"Deprecated",{});
    for(var i in obj.Deprecated){
      section += makeHtml(args.entry_element, obj.Deprecated[i], {});
    }
  }
  //Removed
  if (obj.Removed) {
    section+=makeHtml(args.entry_title_element,"Removed",{});
    for(var i in obj.Removed){
      section += makeHtml(args.entry_element, obj.Removed[i], {});
    }
  }
  //Fixed
  if (obj.Fixed) {
    section+=makeHtml(args.entry_title_element,"Fixed",{});
    for(var i in obj.Fixed){
      section += makeHtml(args.entry_element, obj.Fixed[i], {});
    }
  }
  //Security
  if (obj.Security) {
    section+=makeHtml(args.entry_title_element,"Security",{});
    for(var i in obj.Security){
      section += makeHtml(args.entry_element, obj.Security[i], {});
    }
  }
  return section;
}

module.exports = convertToHtml;