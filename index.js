// add solution here
function theBeatlesPlay(musicians, instruments){
 var newvar=[];
 for(var i = 0; i < musicians.length; i++){
  var musician=musicians[i];
  var instrument=instruments[i];
  newvar.push(musician + " plays " + instrument)
 }
  return newvar
  
}

function johnLennonFacts(facts){
  var newfacts = []
  while(facts.length>0){
    var secvar = facts.shift();
    newfacts.push(secvar + "!!!")
    
  }
return newfacts}

function iLoveTheBeatles(num){
  var empty = []
  do {empty.push("I love the Beatles!")}
  while(++num<15)
  return empty
}
  
  
  