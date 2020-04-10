var chlist = require("./index");
var html = chlist.getList();

require("fs").writeFileSync("test.html",html,"UTF-8");