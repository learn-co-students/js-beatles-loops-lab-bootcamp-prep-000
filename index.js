
function theBeatlesPlay(musicians, instruments) {
  var plays = []

  for (var i = 0; i < musicians.length; i++) {
    plays[i] = `${musicians[i]} plays ${instruments[i]}`
  }

  return plays;
}

function johnLennonFacts(factarray) {
  for (var j = 0; j < factarray.length; j++) {
    factarray[j] = `${factarray[j]}!!!`
  }
  return factarray;
}

function iLoveTheBeatles(n) {
  var loves = [];
  do {
    loves.push("I love the Beatles!")
    n++
  } while (n < 15);
  return loves;
}
