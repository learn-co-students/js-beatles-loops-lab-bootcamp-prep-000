function theBeatlesPlay (musicians, instruments) {
  var newArray = [];
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArray
} 

function johnLennonFacts (facts) {
  var newArray = []
  var n = 0
  while (newArray.length < facts.length) {
    newArray.push(facts[n] + "!!!")
    n++
  }
  return newArray
}

function iLoveTheBeatles (n) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return array
}