// add solution here

// indexes array "musicians" and array "instruments" and pushes it as a string into "storredArray"
function theBeatlesPlay(musicians, instruments) {
  var storedArray = []
  for (var i = 0; i < 4; i++) {
    storedArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }  
  
  return storedArray
}



function johnLennonFacts(facts) {
  var newFacts = []
  var i = 0
  while (i < facts.length) {
  newFacts.push(facts[i] +'!!!')
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