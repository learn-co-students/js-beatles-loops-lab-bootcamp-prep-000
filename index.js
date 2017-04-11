function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (var i = 0; i < musicians.length; i++) {
    var string = musicians[i] + " plays " + instruments[i];
    arr.push(string)
  }
  return arr
}

function johnLennonFacts(facts) {
  var arr = [];
  for (var i = 0; i < facts.length; i++) {
    var string = facts[i] + "!!!";
    arr.push(string)
  }
  return arr
}

function iLoveTheBeatles(number) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    number++;
  } while (number < 15)
  return arr
}