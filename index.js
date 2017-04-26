function theBeatlesPlay(musicians, instruments){
var stringly = [];
for(var i = 0; i < musicians.length; i++){
   stringly = [...stringly, musicians[i] + " plays " + instruments[i]]
}
return stringly;
}
function iLoveTheBeatles(parameter){
var param = [];
do {
  param = ["I love the Beatles!", ...param];
  parameter++;
}
  while (parameter < 15);
  return param;
}
function johnLennonFacts(facts){
 var factly = [];
 for(var i = 0; i < facts.length;i++){
   factly = [...factly, facts[i] + "!!!"]
 }
 return factly;
}
