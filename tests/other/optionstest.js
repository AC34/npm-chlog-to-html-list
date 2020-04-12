var chlist = require("../../index");
var html = chlist.getList({
  list_id:"test-id",
  list_type:"ol",
});

require("fs").writeFileSync(__dirname + "/test.html", html, {encoding:"utf-8",flags:"w"});