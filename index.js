function theBeatlesPlay(musicians,instruments) {
  var c = new Array(3)
  for (let i = 0; i < 4; i++) {
    c[i] = musicians[i] + " plays " + instruments[i]
  }
  return c
}

function johnLennonFacts(facts) {
var c = []
var i = 0

  while (i < facts.length) {
    c[i] = facts[i] + "!!!"
    i++
  } ;

  return c
}

function iLoveTheBeatles(i) {
  var c = []

  do {
      c.push("I love the Beatles!")
      i++
    } while (i < 15);

    return c
}
