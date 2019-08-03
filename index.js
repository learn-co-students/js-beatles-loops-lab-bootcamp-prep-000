// add solution here
function theBeatlesPlay(musicians, instruments){
 var array = [];
   for (let i = 0; i < 4; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`);
   } 
   return array;
}

function johnLennonFacts(facts){
 var beatlesFacts = [];
 let i = 0; 
 while (facts.length > i){
   beatlesFacts.push(`${facts[i]}!!!`);
   i++
 }
 return beatlesFacts
}

function iLoveTheBeatles(n){
  var fan = [];
  do {fan.push(`I love the Beatles!`); n++}
  while (n < 15);
  return fan
}