function theBeatlesPlay (musicians, instruments) {
  var whoPlaysWhat = [];
  for (var i = 0; i < musicians.length; i++) {
    whoPlaysWhat[i] = (`${musicians[i]} plays ${instruments[i]}`)
  }
  return whoPlaysWhat
}

function johnLennonFacts (facts) {
  var factsAboutJohnLennon = [];
  var i = 0
  while (i <facts.length) {
    factsAboutJohnLennon[i] = (`${facts[i]}!!!`)
    i++
  }
  return factsAboutJohnLennon
}

function iLoveTheBeatles(times) {
  var howMuch = [];
  var i = 0;
  if (times>=15) {
    howMuch[i] = "I love the Beatles!"
  } else {
    do {
      howMuch[i] = "I love the Beatles!"
      i++
    } while (i<=times);
  }
  return howMuch
}
