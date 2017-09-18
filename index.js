function theBeatlesPlay(musicians, instruments) {
  var array = [];

  for(var i = 0; i < musicians.length; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
return array;
}

function johnLennonFacts(facts) {
    var array = [];
    let i = facts.length - 1;

    while (i >= 0) {
      array.unshift(facts[i] + "!!!");
      i--;
    }
    return array;
}

function iLoveTheBeatles(x) {
  var array = [];

  do {
    array.push("I love the Beatles!");
    x++;
  } while (x < 15);
  return array;
}
