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
  },
  getList: function (args = {}) {
    //prpeare
    var msgs = require("./src/util/getMessages")();
    var pi = makeProjectInfo(args,msgs);
     
    var parse = require("./src/process/parseLogFile");
    var mid_obj = parse(pi.changelog,msgs);
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

module.exports = ChangeLogToHtmlList;