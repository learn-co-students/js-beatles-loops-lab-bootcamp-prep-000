function theBeatlesPlay(musicians, instruments) {
  var newArr = []
  for (var i = 0; i < musicians.length; i++) {
    newArr[i] = musicians[i] + ' plays ' + instruments[i]
  }

  return newArr
}

function johnLennonFacts(facts) {
  var i = 0
  while (i !== facts.length) {
    facts[i] += '!!!'
    i++
  }

  return facts
}


function iLoveTheBeatles(n) {
  var newArr = []
  do {
    newArr.push('I love the Beatles!')
    n++
  } while (n < 15);

  return newArr
}
