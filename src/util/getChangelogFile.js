function getChangelogFile(project_root, changelog_path="", Console){
  var fs = require("fs");
  var sep = require("path").sep;
  //making path
  var cpath = changelog_path;
  //check if the changelog_path is an absolute path
  //if the file exists, then no change to changelog_path
  if(!fs.existsSync(cpath)){
    //otherwise, create the path from the project_root
    changelog_path = !changelog_path ? "CHANGELOG.md" : changelog_path;
    changelog_path = changelog_path==="" ? "CHANGELOG.md" : changelog_path;
    changelog_path = changelog_path.startsWith("./")?changelog_path.replace("./",""):changelog_path;
    changelog_path = changelog_path.startsWith("/")?changelog_path.replace("/",""):changelog_path;
    //update cpath from the project_root
    cpath = project_root+sep+changelog_path;
  }
  if (!require("fs").existsSync(cpath)) {
    Console.log("file-not-found",{path:cpath});
  }
  try {
    var c = require("fs").readFileSync(cpath, "UTF-8");
    //success
    return c;
  } catch (e) {
    Console.log("changlog-load-failed",{});
  }
}
module.exports = getChangelogFile;