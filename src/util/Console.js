function Console(){
  this.logs=[];
  this.msgs = undefined; 
  this.verbose = true;
}

Console.prototype.prepare=function(args){
  if(args.verbose){
    this.verbose = args.verbose;
  } 
}
Console.prototype.log = function(msg_key){
    
}

module.exports = Console;