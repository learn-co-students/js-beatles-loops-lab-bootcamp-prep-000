function theBeatlesPlay(musicians, instruments){
  var anotherArray= [];
  for (var i=0; i<musicians.length; i++){
    anotherArray.push(musicians[i] + " plays " + instruments[i]);
  }
return anotherArray;
}

function johnLennonFacts(facts){
  var loud= [];
  var i = 0;
  while (i < facts.length) {
    loud.push(facts[i] + "!!!");
    i++;
  }
  return loud;
}

function iLoveTheBeatles(n){
  var amount= [];
  do {
    amount.push("I love the Beatles!");
    n++
  } while (n < 15);
  return amount;
}
