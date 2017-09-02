// beatlesPlayFunction

function theBeatlesPlay (musicians, instruments){
  var final = []
  for (var i = 0; i < 4; i++){
    final.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return final
}
// johnLennonFacts

function johnLennonFacts(facts){
  var yelledOut = []
  let i = 0

  while (i < facts.length) {
    yelledOut.push(`${facts[i]}!!!`)
    i++
  }
  return yelledOut
}
// iLoveTheBeatles

function iLoveTheBeatles(n){
  var string = []
  do {
    string.push("I love the Beatles!")
    n++
  } while (n < 15) 
    return string
}