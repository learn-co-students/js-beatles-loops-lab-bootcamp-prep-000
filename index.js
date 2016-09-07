function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    for (var j = 0; j < instruments.length; j++) {
      if (i === j) {
        array.push(`${musicians[i]} plays ${instruments[j]}`)
      }
    }
  }
  return array;
}


function johnLennonFacts(facts) {
  var i = 0;
  var array = []
  while (i <= facts.length - 1) {
    array.push(`${facts[i]}!!!`)
    i++
  }
  return array
}


function iLoveTheBeatles(n) {
  var array = [];
  do {
    array.push("I love the Beatles!")
    n++;
  } while (n < 15) {

  }

  return array;
}
