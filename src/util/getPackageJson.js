function getPackageJson(project_root, package_json_path, msgs) {
  //project_root is always not undefined
  package_json_path = !package_json_path ? "package.json" : package_json_path;
  var sep = require("path").sep;
  var jpath = project_root + sep + package_json_path;
  var json = require("fs").readFileSync(jpath, "UTF-8");
  if (!require("fs").existsSync(jpath)) {
    console.log(msgs["file-not-found"]({ path: jpath }));
    process.exit(1);
  }
  try {
    var pj = JSON.parse(json);
    //success
    return pj;
  } catch (e) {
    console.log(msgs["packagejson-parse-failed"]());
  }
}
module.exports = getPackageJson;