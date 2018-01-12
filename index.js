function theBeatlesPlay(musicians,instruments){
  var pairing = [];
  for (var i = 0; i < musicians.length; i++){
    pairing.push(`${musicians[i]} plays ${instruments[i]}`)
  }
 return pairing 
}

function johnLennonFacts(facts){
  var length = facts.length;
  var i = 0;
  var new_facts = [];
  while (length > i){
    new_facts.push(`${facts[i]}` + "!!!");
    i ++;
  }
  return new_facts;
}

function iLoveTheBeatles(number){
  var empty_array = [];
  do{
    empty_array.push("I love the Beatles!");
    number ++
  } while(number < 15)
  return empty_array;
}