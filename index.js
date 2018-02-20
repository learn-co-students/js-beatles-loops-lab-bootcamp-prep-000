function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var facts_array = []
  var i = 0
  while (i < facts.length) {
    facts_array.push(facts[i] + "!!!");
    i++
  }
  return facts_array
}

function iLoveTheBeatles(number) {
  var times = [];
  do {
    times.push("I love the Beatles!");
    number++;
  }
  while (number < 15);
  return times
}
