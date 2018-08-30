// add solution here


function theBeatlesPlay(musician, instruments){
  var array = []
   for (var i = 0; i < 4; i++){
     array.push(musician[i] + " plays " + instruments[i]);
   } 
   return array
}

function johnLennonFacts(facts){
  var array = [];
  var n = 0;
  while (n < facts.length) {array.push(facts[n++] + `!!!`)}
  return array
}

function iLoveTheBeatles(n){
  var array = []
  
  do{array.push(`I love the Beatles!`); n++} while(n < 15)
  return array
}