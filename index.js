function theBeatlesPlay(musicians, instruments) {
  var empt = []
  for (let x = 0; x < musicians.length; x++) {
      empt.push(musicians[x] + " plays " + instruments[x])
  }
  return empt
}

function johnLennonFacts(facts) {
  var y = 0
  var txt = []
  while (facts[y]) {
    txt[y] = facts[y] + "!!!";
    y++;
  }
  return txt
}

function iLoveTheBeatles(number) {
  var ove = []
  do {
    ove.push("I love the Beatles!")
  } while (number++ + 1 < 15)
  return ove
}
