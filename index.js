var ChangeLogToHtmlList = {
  html_keys: {
    list_id: "list_id",
    list_type: "list_type",
    section_element: "section_element",
    section_header_element: "section_header_element",
    date_element: "date_element",
    entry_element: "entry_element",
    text_content_element: "text_content_element",
    link_element: "link_element",
  },
  args_keys: {
    project_root: "project_root",
    entry_root: "entry_root",
    //from project root
    package_json_path: "package_json_path",
    changelog_path: "changelog_path",
    verbose: "verbose",
  },
  getList: function (args = {}) {
    /**
     * preparation
     */
    this.Console = require("./src/util/Console");
    this.Console.prepare(args);
    var parse = require("./src/process/parseLogFile");
    var toHtml = require("./src/process/convertToHtml");
    //notify start
    this.Console.log("getList-started", {});
    //need to make sure args are validated
    //needs to have: list_type
    args = validateArguments(args, this.Console);
    /**
     * actual process begins from here.
     */
    var parsed_obj = parse(args.changelog, this.Console);
    //quito on falure
    if (parsed_obj === {}) {
      //notify failure
      this.Console.log("getList-unsuccessfully-ended", {});
      return "";
    }
    //parse the log file into an array of objects, containing the log information
    //now convert the middle object into html
    var html = toHtml(parsed_obj, args, this.Console);
    //finally returning the value
    //notify end
    this.Console.log("getList-successfully-ended", {});
    return html;
  },
};

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
 * @param {object} Console
 */
function validateArguments(args, Console) {
  //gathering and making project related information
  //valid types
  var defaults = {
    //htmls
    list_id: { default: "changelog-list" },
    list_class:{default:"changelog-list"},
    list_type: { default: "ul" },
    section_element: { default: "dl" },
    section_header_element: { default: "dt" },
    date_element: { default: "dd" },
    entry_title_element:{default:"dt"},
    entry_element: { default: "dd" },
    text_content_element: { default: "dd" },
    link_element: { default: "dd" }, //a tag is automatically added
    //other
    project_root: {},
    entry_root: {},
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
    if (args[key] === undefined) {
      //fill with default
      args[key] = defaults[key].default;
    }
    //check by range
    if (defaults[key].range !== undefined) {
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
  //update console verbose seting
  Console.vebose = args.verbose;
  //make project information
  args.project_root = getProjectRootDir();
  args.entry_root = getEntryPointDir();
  //reading package.json file""
  var getPackageJson = require("./src/util/getPackageJson");
  args.package_json = getPackageJson(args, Console);
  var getChangelogFile = require("./src/util/getChangelogFile");
  args.changelog = getChangelogFile(
    args.project_root,
    args.changelog_path,
    Console
  );
  return args;
}

ChangeLogToHtmlList.getLog = function () {
  if (!this.Console) return [];
  if (!this.Console.logs) return [];
  return this.Console.logs;
};

module.exports = ChangeLogToHtmlList;
