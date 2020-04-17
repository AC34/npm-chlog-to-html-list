var exec = require('child_process');

//embed changelog to README.md as html
var chlister = require("./index");
var list = chlister.getList({
  changelog_file_path:""
});


process.exit(0);
//update installed modules
exec.exec('npm install',(err,stdout,stderror)=>{
  console.log(stdout);
});

//version up
exec.exec('npm version patch',(err,stdout,stderror)=>{
  console.log(stdout);
});
//publish
//exec("npm publish");
exec.exec('npm publish',(err,stdout,stderror)=>{
  console.log(stdout);
});