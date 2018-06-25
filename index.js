function theBeatlesPlay(am, ai) {
  var blank = []
  for (var i = 0; i < am.length; i++) {
    blank.push(`${am[i]} plays ${ai[i]}`)
  }
  return blank
}

function johnLennonFacts(arg) {
  const facts = arg
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push('I love the Beatles!')
    num++
  } while (num < 15);
  return array
}
