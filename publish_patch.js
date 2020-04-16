var exec = require("exec");

//prepare

//update installed modules
exec("npm install");

//version up
exec("npm version patch");
//publish
exec("npm publish");