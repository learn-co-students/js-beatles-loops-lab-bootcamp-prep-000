var beatlesArray = []
function theBeatlesPlay(musicians, instruments) {

  for (var i = 0; i < musicians.length; i++) {
    beatlesArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatlesArray
}

function johnLennonFacts(facts) {
  beatlesArray = []
  var i = 0;
  while (i < facts.length) {
      beatlesArray.push(`${facts[i]}!!!`)
      i++;
  }
  return beatlesArray
}

function iLoveTheBeatles(num) {
  beatlesArray = []
  do {
    beatlesArray.push("I love the Beatles!")
    num++
  } while (num < 15);
  return beatlesArray
}
