function theBeatlesPlay(musicians, instruments){
  var empty = [];
  for (var i = 0; i < musicians.length; i++) {
    var newString = `${musicians[i]} plays ${instruments[i]}`
    empty.push(newString);
  }
  return empty;
}

function johnLennonFacts(facts){
  var i = 0;
  while (i < facts.length) {
        facts[i] = facts[i] + "!!!";
        i++;
      }
  return facts;
}


function iLoveTheBeatles(x) {
  var empty = [];
    do {
      empty.push("I love the Beatles!");
      x++;
    }
        while (x < 15);

    return empty
}
