// add solution here
function theBeatlesPlay(musicians, instruments){
  var counter = [];
  for (let i = 0; i < musicians.length; i++){
  counter.push(`${musicians[i]} plays ${instruments[i]}`);
}
  return counter;
}
function johnLennonFacts(facts){
 let i = 0 ;
while (i < facts.length){
 facts[i] = `${facts[i]}!!!`;
 i++;
 console.log(facts[i]);
}
 return facts;
}

function iLoveTheBeatles(n){
  var array = [];
  let i = 0;
  do {array[i] = "I love the Beatles!";
  i++;
    
  } while (i < 15 - n);

return array;
}