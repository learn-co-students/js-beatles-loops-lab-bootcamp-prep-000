function theBeatlesPlay (musicians, instruments){
  var array = [];
  for (var i = 0; i < musicians.length; i++) {

     array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
return array;
}

function johnLennonFacts(fact){

}

function johnLennonFacts(facts){
  for (var i = 0; i < facts.length; i++) {
    facts[i] = `${facts[i]}!!!`;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
  } while (++n < 15);
  return arr;
}
