function theBeatlesPlay(person,instrument){
  var member = [];

  for(var i = 0; i < person.length; i++){
    member[i] = (person[i] + " plays " + instrument[i]);
  }
  return member;
}
function johnLennonFacts(fact){
  var exc = "!!!";
  var i = 0;
  while( i<fact.length){
    fact[i] = fact[i].concat(exc);
    i++
  }
  return  fact;
}

 function iLoveTheBeatles(n){
   var says = "I love the Beatles!";
   var arr = [];
   do {
    arr.push(says);
    n++
}
while (n<15);
return arr;
 }
