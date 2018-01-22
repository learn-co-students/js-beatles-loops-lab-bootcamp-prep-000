
function theBeatlesPlay (musicians, instruments){
  var beatlesPlay = []
  
  for (var i = 0; i < 4; i++) {
    beatlesPlay.push(musicians[i] + " plays " + instruments[i])
  }
  return beatlesPlay
}

function johnLennonFacts(facts) {
  var jLFacts = []
  let i = 0
  while (i < facts.length) {
    jLFacts.push(facts[i] + "!!!")
    i++
  }
  return jLFacts
}

function iLoveTheBeatles (number) {
  var loveTheBeatles = []
  do {
    loveTheBeatles.push("I love the Beatles!")
    number ++
    }
    while (number < 15)
    return loveTheBeatles
}