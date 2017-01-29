function theBeatlesPlay(musicians, instruments) {
    var theBeatles = []

    for (var i = 0; i < musicians.length; i++) {
        theBeatles.push(musicians[i] + " plays " + instruments[i])
    }

  return theBeatles
}

function johnLennonFacts(facts) {
  var johnLennon = []
  var i = 0;

  while (i < facts.length) {
    johnLennon.push(facts[i] + "!!!")
    i++
  }

  return johnLennon
}

function iLoveTheBeatles(n) {
    var iLove = []

    do {
      iLove.push("I love the Beatles!");
      n++
    } while (n < 15)


  return iLove
}
