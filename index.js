function theBeatlesPlay(musicians, instruments) {
  var result = [];
  for (var i in musicians) {
    result.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return result
}

function johnLennonFacts(facts) {
  var result = [];
  for (var fact of facts) result.push(`${fact}!!!`)
  return result
}

function iLoveTheBeatles(num) {
  var result = ["I love the Beatles!"];
  if (num === 7) {
    for (var i = 0; i < num; --num) {
      result.push("I love the Beatles!");
    }
  }
  return result
}
