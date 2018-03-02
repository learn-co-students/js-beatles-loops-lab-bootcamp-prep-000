function theBeatlesPlay(musician,instrument) {
  var sentence = []
  for (var i=0;i<musician.length;i++) {
    sentence[i]=musician[i] + " plays "+ instrument[i]
  }
  //console.log(sentence)
  return sentence
}

function johnLennonFacts(facts) {
  var i = 0
  while (i < facts.length) {
    facts[i]=facts[i]+"!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles (num) {
  var sentence = []
  var i = 0
  do {
    sentence[i]="I love the Beatles!"
    num++
    i++
  } while (num < 15)
  return sentence
}