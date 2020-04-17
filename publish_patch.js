var exec = require('child_process');
var sep = rquire("path").sep;

//embed changelog to readme


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