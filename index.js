function theBeatlesPlay(musicians, instruments) {
  var array = new Array();
  for (var i = 0; i < musicians.length; i++) {
    array[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return array;
}

function johnLennonFacts(facts) {
  var i = 0;
  while(i < facts.length) {
    facts[i] = `${facts[i]}!!!`;
    i++;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var array = new Array();
  do{
    array.push("I love the Beatles!")
    n++
  }while(n < 15)
  return array;
}
