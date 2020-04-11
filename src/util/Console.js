function Console(){
  this.logs=[];
  this.msgs = undefined; 
  this.verbose = true;
}
/**
 * 
 */
Console.prototype.prepare=function(args){
  if(args.verbose){
    this.verbose = args.verbose;
  } 
}
/**
 * @param {msg_key} string
 * @param {object} args
 */
Console.prototype.log = function(msg_key,args){
  var msg = this.msgs[msg_key](args);
  this.log.push(msg); 
  if(this.verbose===true){
    console.log(msg);
  }
}
module.exports = Console;