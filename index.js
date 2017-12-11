
function theBeatlesPlay(musicianArr, instruments) {
  var results = []

  for (var i = 0; i < musicianArr.length; i++) {
    let musician = musicianArr[i]
    let instrument = instruments[i]
    results.push(`${musician} plays ${instrument}`)
  }

  return results
}

function johnLennonFacts(facts) {
  var results = [];
  for (var i = 0; i < facts.length; i++) {
    var fact = facts[i]
    results.push(fact + "!!!")
  }

  return results
}


function iLoveTheBeatles(num) {
  var results = [];
  do {
    results.push("I love the Beatles!")
    num++
  } while (num < 15);

  return results
}
