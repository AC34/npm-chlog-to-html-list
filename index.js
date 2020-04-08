var ChangeLogToHtmlList = {
  list_types: {
    ul: "ul",
    ol: "ol",
  },
  args_keys: {
    project_root: "project_root",
    entry_root: "entry_root",
    //from project root
    package_json_path: "package_json_path",
    changelog_path:"changelog_path",
    verbose:"verbose"
  },
  getList: function (args = {}) {
    //prpeare
    var msgs = require("./src/util/getMessages")();
    var parse = require("./src/process/parseLogFile");
    var toHtml = require("./src/process/convertToHtml");
    //gathering and making project related information
    var pi = makeProjectInfo(args,msgs);
    //need to make sure args are validated
    //needs to have: list_type
    args = validateArguments(args,project_info);
    /**
     * actual process begins from here.
     */
    var parsed_obj = parse(pi.changelog,msgs);
    //parse the log file into an array of objects, containing the log information
    //now convert the middle object into html
    var html = toHtml(parsed_obj,args.list_type,msgs);
    //finally returning the value
    return html;
  }
};

function makeProjectInfo(args = {},msgs) {
  var ret = {};
  ret.project_root = getProjectRootDir();
  ret.entry_root = getEntryPointDir();
  //reading package.json file""
  var getPackageJson = require("./src/util/getPackageJson");
  ret.package_json = getPackageJson(ret.project_root, args.package_json_path,msgs);
  var getChangelogFile = require("./src/util/getChangelogFile");
  ret.changelog = getChangelogFile(ret.project_root, args.changelog_path,msgs);
  return ret;
}

function getEntryPointDir() {
  return __dirname;
}

function getProjectRootDir() {
  var sep = require("path").sep;
  var paths = __dirname.split(sep);
  paths.pop(); //module itself
  paths.pop(); //node_modules
  return paths.join(sep);
}
/**
 * Validates arguments, puts default values if anything goes wrong.
 * @param {object} args 
 * @param {object} project_info 
 * @param {object} msgs
 */
function validateArguments(args,project_info,msgs){
  //valid types 
  var types = ChangeLogToHtmlList.list_types;
   

}

module.exports = ChangeLogToHtmlList;