function getChangelogFile(project_root, changelog_path="", Console){
  var sep = require("path").sep;
  //formatting
  changelog_path = !changelog_path ? "CHANGELOG.md" : changelog_path;
  changelog_path = changelog_path==="" ? "CHANGELOG.md" : changelog_path;
  changelog_path = changelog_path.startsWith("./")?changelog_path.replace("./",""):changelog_path;
  changelog_path = changelog_path.startsWith("/")?changelog_path.replace("/",""):changelog_path;
  //making path
  var cpath = project_root + sep + changelog_path;
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