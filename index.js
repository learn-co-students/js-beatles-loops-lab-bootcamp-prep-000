function theBeatlesPlay(musicians, instruments){
  var strings = [];
  for (var i = 0; i < musicians.length; i++) {
   var sentence = musicians[i] + ` plays ` + instruments[i]; 
   strings.push(sentence); 
}
return strings;
}

function johnLennonFacts(facts){
 let x = 0 
 var string = []; 
  while (x < facts.length){
    var fact = facts[x] + `!!!`; 
    string.push(fact)
    x++;
  }
  return string; 
}
function iLoveTheBeatles(n){
  var array = [];
  do {array.push("I love the Beatles!");
    n++;
  } 
    while ( n < 15);
    return (array)
}
console.log(iLoveTheBeatles(7)) 
