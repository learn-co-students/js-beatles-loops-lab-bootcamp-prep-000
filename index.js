function theBeatlesPlay(musicians, instruments) {
   var emptyarray = [] 
  for (var i = 0; i< musicians.length; i++) {
    emptyarray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  
  return emptyarray
}

function johnLennonFacts (facts){
  var newfacts = []
  let i = 0
  while (i < facts.length) {
  newfacts.push(`${facts[i]}!!!`)
  i++
  }
  return newfacts
}
function iLoveTheBeatles(n) {
  var beatles = []
  do {beatles.push("I love the Beatles!")
  n++
} while (n < 15)

return beatles
}
