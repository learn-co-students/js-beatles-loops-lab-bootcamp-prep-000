function theBeatlesPlay(musicians, instruments) {
  var whoplayswhat = [];
  for (let i = 0; i < musicians.length; i++) {
    whoplayswhat[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return whoplayswhat
}

function johnLennonFacts(facts) {
  var output = [];
  while (facts.length > 0) {
    output.unshift(`${facts.pop()}!!!`)
  }
  return output
}

function iLoveTheBeatles(cutoff) {
  var output = [];
  do {
    output.unshift("I love the Beatles!");
    cutoff++
  } while (cutoff <15);
  return output
}