var chlist = require("../../index");
var html = chlist.getList();

require("fs").writeFileSync(__dirname+"/test.html",html,"UTF-8");