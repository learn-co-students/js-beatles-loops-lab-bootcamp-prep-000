function theBeatlesPlay(musicians, instruments) {
  var myArray = [];
  for (var i = 0; i < musicians.length; i++) {
    myArray.push(musicians[i] + " plays " + instruments[i])
  }
  return myArray
}

function johnLennonFacts(facts) {
  var n = 0
  var newArray = []
  while (n < facts.length) {
    newArray.push(facts[n] + "!!!")
    n++
  }
  return newArray
}

function iLoveTheBeatles(num) {
  var emptyArray = [];
  do {
    emptyArray.push("I love the Beatles!")
    num++
  } while (num < 15);
  return emptyArray
}
