var ChangeLogToHtmlList = {
  list_types:{
    ul:"ul",
    ol:"ol"
  },
  getList:function(args ={}){
    var msgs = require("./src/util/getMessages")("");
    var pj = getPackageJson();
     
  }
};

function getPackageJson(path=""){
  path = path===""?"package.json":path;

}

function getChangelogFile(path){
  
}

module.exports = ChangeLogToHtmlList;