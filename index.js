function theBeatlesPlay(musicians, instruments) {
  const arr = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr;
}

function johnLennonFacts(factsArray) {
  const arr = []
  let i = 0

  while (i < factsArray.length) {
    arr.push(`${factsArray[i]}!!!`)
    i++;
  }
  return arr;
}

function iLoveTheBeatles(n) {
  var arr = []

  do {
    arr.push("I love the Beatles!")
    n++
  } while (n < 15);
  return arr;
}
