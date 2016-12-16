function theBeatlesPlay(musicians, instruments) {
  var emptyArray = []
  for (var i = 0; i <= musicians.length - 1; i++) {
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return emptyArray
};

function johnLennonFacts(facts) {
    var factsExclaimed = []
    let n = 0
    while (n <= facts.length - 1) {
      factsExclaimed.push(`${facts[n]}!!!`)
      n++
    }
    return factsExclaimed
};

function iLoveTheBeatles(number) {
  var emptyArray = []
  do {
    emptyArray.push(`I love the Beatles!`)
    number++
  } while (number < 15)
  return emptyArray
};
