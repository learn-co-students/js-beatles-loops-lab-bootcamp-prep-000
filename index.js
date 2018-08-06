function theBeatlesPlay(musicianArray, instrumentArray) {
  var emptyArray = [] 
    for (var i = 0; i < musicianArray.length; i++) {
    emptyArray.push(musicianArray[i] + " plays " + instrumentArray[i])
    }
    return emptyArray
}
function johnLennonFacts(facts) {
  var newFacts = []
  var i = 0
  while (i < facts.length) {
    newFacts.push(facts[i] + "!!!")
    i++
  }
  return newFacts
}
function iLoveTheBeatles(n) {
 var love = []
 do {
   love.push("I love the Beatles!")
   n++
 } while (n < 15)
 return love
}