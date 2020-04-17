var fs = require("fs");
var sep = require("path").sep;
var pat = "<!--changelog-->";
var chlister = require("../index.js");

var rdm = fs.readFileSync(__dirname+sep+"README.md","UTF-8");

//create the changelog path
var p_root = __dirname.split();
p_root = __dirname.split(sep);
p_root.pop();
var c_path = p_root.join(sep)+sep+"CHANGELOG.md";
c_path = c_path.replace(",","");

//create the list
var list = chlister.getList({
  changelog_path:c_path
});

//replace the list with where it should be in README
rdm = rdm.replace(pat,list);

//write the new README to the project root
//no try-catch, coz I need to know any failure.
var rdm_path = p_root.join(sep)+sep+"README.md";
fs.writeFileSync(rdm_path,rdm,"UTF-8");