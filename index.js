function theBeatlesPlay(musicians, instruments){
  var Beatles = [];
  for (var i = 0; i < musicians.length; i++){
    Beatles.push(musicians[i] + " plays " + instruments[i]);
  }
  return Beatles;
}

function johnLennonFacts(facts){
  var exclamation = [];
  var i = 0;
  while (i < facts.length) {
    exclamation.push(facts[i] + "!!!");
    i++;
  }
  return exclamation;
}

function iLoveTheBeatles(num){
  var count = [];
  do {
    count.push("I love the Beatles!");
    num++
  } while (num < 15);
  return count;
}
