function getPackageJson(args, Console) {
  var package_json_path = args.package_json_path;
  //formatting
  package_json_path = !package_json_path ? "package.json" : package_json_path;
  package_json_path = package_json_path ===""? "package.json" : package_json_path;
  package_json_path = package_json_path.startsWith("./")?package_json_path.replace("./",""):package_json_path;
  package_json_path = package_json_path.startsWith("/")?package_json_path.replace("/",""):package_json_path;

  var sep = require("path").sep;
  var jpath = args.project_root + sep + package_json_path;
  var json = require("fs").readFileSync(jpath, "UTF-8");
  if (!require("fs").existsSync(jpath)) {
    console.log(msgs["file-not-found"]({ path: jpath }));
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