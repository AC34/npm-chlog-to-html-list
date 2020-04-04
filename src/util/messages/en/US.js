module.exports = {
  "file-not-found":function(args={path:""}){
    return "File ["+args.path+"] not found."
  },
  "packagejson-parse-failed":function(args={}){
    return "parsing package.json failed.";
  },
  "changlog-load-failed":function(args={}){
    return "changelog loading failed.";
  },
  "process-abort":function(args={}){
    return "process abort.";
  },

};