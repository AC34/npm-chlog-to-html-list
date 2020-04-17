var exec = require('child_process');

//embed changelog to readme
require("./publish/embed_log");

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