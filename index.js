function theBeatlesPlay(arMusicians, arInstruments) {
    var sentence = ""
    var arNew = []

    for (var i = 0; i < arMusicians.length; i++) {
      sentence = arMusicians[i] + ' plays ' + arInstruments[i]
      arNew.push(sentence)
    }

    return arNew
}

function johnLennonFacts(facts) {
  var newFact = ""
  var arNew = []

  for (var i = 0; i < facts.length; i++) {
    newFact = facts[i] + "!!!"
    arNew.push(newFact)
  }

  return arNew
}

function iLoveTheBeatles(number) {
  var arNew = []
  var i=0;
  do {
    arNew.push("I love the Beatles!")
    i++;
  } while((i <= number) && (number < 15))

  return arNew
}

console.log(iLoveTheBeatles(7))
