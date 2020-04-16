var Console = {
  logs:[],
  msgs:undefined,
  verbose:true
};
/**
 * @param {object} args
 */
Console.prepare=function(args){
  if(args.verbose!==undefined){
    this.verbose = args.verbose;
  }
  //load msgs
  this.msgs = require("./getMessages")();
}
/**
 * @param {msg_key} string
 * @param {object} args
 */
Console.log = function(msg_key,args={}){
  var msg = this.msgs[msg_key](args);
  this.logs.push(msg); 
  if(this.verbose===true){
    console.log(msg);
  }
}
module.exports = Console;