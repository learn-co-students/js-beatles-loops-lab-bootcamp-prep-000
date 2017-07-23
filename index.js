function theBeatlesPlay(musicians, instruments) {
  var sentences = new Array()

  for (let i = 0; i < musicians.length; i++) {
    sentences[i] = musicians[i] + " plays " + instruments[i]
  }

  return sentences
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(countdown) {
  if (countdown < 15) {
    var sentences = new Array()
    do {
      sentences[countdown] = "I love the Beatles!"
      countdown--
    } while (countdown >= 0)
    return sentences
  } else {
    var sentence = ["I love the Beatles!"]
    return sentence
  }
}
