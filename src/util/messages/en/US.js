module.exports = {
  "getList-started":function(args={}){
    return "getList started:";
  },
  "getList-successfully-ended":function(args={}){
    return "getList unsuccessfully ended.";
  },
  "getList-unsuccessfully-ended":function(args={}){
    return "getList unsuccessfully ended.";
  },
  "file-not-found":function(args={path:""}){
    return "File ["+args.path+"] not found."
  },
  "packagejson-parse-failed":function(args={}){
    return "parsing package.json failed.";
  },
  "changlog-load-failed":function(args={}){
    return "changelog loading failed.";
  },
  "empty-log":function(){
    return "Changelog was found to be empty."
  },
  "invalid-log":function(){
    return "Changelog was found to be invalid string";
  }
};