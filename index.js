function theBeatlesPlay(musicians, instruments){
  var sentenceObj = []
    for (let i = 0; i < musicians.length; i++){
      var sentence = musicians[i] + " plays " + instruments[i]
      sentenceObj[i] = sentence
    }
    return sentenceObj
}

function johnLennonFacts(facts){
  let i = 0
  var length = facts.length
  while (i< length){
    facts[i] = facts[i] +"!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(n){
  var emptArray = []
    do {
    emptArray.push('I love the Beatles!')
    n++
  } while (n<15)
  return emptArray
}
