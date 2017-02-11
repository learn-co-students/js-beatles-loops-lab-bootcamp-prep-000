var theBeatlesPlay = function(musicians, instruments) {
  var newArray = [];
  for (var i = 0 ; i < 4; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  };
  return newArray;
}

var johnLennonFacts = function(facts) {
let run = facts.length
var newArray = [];
  while (run > 0) {
    newArray.unshift(facts[--run] + "!!!");
  }
  return newArray
}

var iLoveTheBeatles = function(number) {
  var emptyArray = []
  do {
    emptyArray.push("I love the Beatles!");
    ++number
  } while (number < 15);
  return emptyArray
}

theBeatlesPlay(musicians, instruments);
