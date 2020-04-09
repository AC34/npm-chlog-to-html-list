var ChangeLogToHtmlList = {
  list_types: {
    ul: "ul",
    ol: "ol",
  },
  args_keys: {
    list_type: "list_type",
    project_root: "project_root",
    entry_root: "entry_root",
    //from project root
    package_json_path: "package_json_path",
    changelog_path: "changelog_path",
    verbose: "verbose",
  },
  getList: function (args = {}) {
    //prpeare
    var msgs = require("./src/util/getMessages")();
    var parse = require("./src/process/parseLogFile");
    var toHtml = require("./src/process/convertToHtml");
    //need to make sure args are validated
    //needs to have: list_type
    args = validateArguments(args,msgs);
    console.log("validated args:"+JSON.stringify(args,null," "));
    /**
     * actual process begins from here.
     */
    var parsed_obj = parse(args.changelog, msgs);
    //parse the log file into an array of objects, containing the log information
    //now convert the middle object into html
    var html = toHtml(parsed_obj, args.list_type, msgs);
    //finally returning the value
    return html;
  },
};

function makeProjectInfo(args = {}, msgs) {
  var ret = {};
  ret.project_root = getProjectRootDir();
  ret.entry_root = getEntryPointDir();
  //reading package.json file""
  var getPackageJson = require("./src/util/getPackageJson");
  ret.package_json = getPackageJson(
    ret.project_root,
    args.package_json_path,
    msgs
  );
  var getChangelogFile = require("./src/util/getChangelogFile");
  ret.changelog = getChangelogFile(ret.project_root, args.changelog_path, msgs);
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
function validateArguments(args, msgs) {
  //gathering and making project related information
  var pi = makeProjectInfo(args, msgs);
  //valid types
  var defaults = {
    //defauilt is ul
    list_type: {
      default: "ul",
      range: Object.keys(ChangeLogToHtmlList.list_types),
    },
    project_root: {},
    entry_root: {},
    //from project root
    //from project root
    package_json_path: {
      keys: ["package_json_path"],
      default: "package.json",
    },
    changelog_path: {
      defualt: "CHANGELOG.md",
    },
    verbose: {
      default: true,
      range: [true, false],
    },
  };
  //check empty args
  if (typeof args !== "object") args = {}; //initialization
  for (var key in defaults) {
    //on empty key
    if (!args[key]) {
      //fill with default
      args[key] = defaults[key].default;
    }
    //check by range
    if (defaults[key].range) {
      var range_safe = false;
      for (var range_index in defaults[key].range) {
        if (args[key] === defaults[key].range[range_index]) {
          range_safe = true;
          break;
        }
      }
      if (range_safe === false) {
        //override by default
        args[key] = defaults[key].default;
      }
    }
    //else leave it as is
  } //for
  //make project information
  args.project_root = getProjectRootDir();
  args.entry_root = getEntryPointDir();
  //reading package.json file""
  var getPackageJson = require("./src/util/getPackageJson");
  args.package_json = getPackageJson(
    args.project_root,
    args.package_json_path,
    msgs
  );
  var getChangelogFile = require("./src/util/getChangelogFile");
  args.changelog = getChangelogFile(args.project_root, args.changelog_path, msgs);
  return args;
}

module.exports = ChangeLogToHtmlList;