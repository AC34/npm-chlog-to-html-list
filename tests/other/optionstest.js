var chlist = require("../../index");
var html = chlist.getList({
  verbose:true,
  list_id:"test-id",
  list_type:"ol",
  changelog_path:"iawa"
});

require("fs").writeFileSync(__dirname + "/test.html", html, {encoding:"utf-8",flags:"w"});