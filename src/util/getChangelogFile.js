function getChangelogFile(project_root, changelog_path="", msgs) {
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
    Console.log("process-abort",{path:cpath});
    process.exit(1);
  }
  try {
    var c = require("fs").readFileSync(cpath, "UTF-8");
    //success
    return c;
  } catch (e) {
    Console.log("changlog-load-failed",{});
    Console.log("process-abort",{});
    process.exit(1);
  }
}
module.exports = getChangelogFile;