
function theBeatlesPlay(musicians, instruments){
  var counter = []
 for (let players = 0; players < musicians.length; players++){
   counter.push(`${musicians[players]} plays ${instruments[players]}`)
 }
 return counter
}


function johnLennonFacts(facts){
  var newFacts = []
  let i = 0
  while(newFacts.length < facts.length){
  newFacts.push(`${facts[i]}!!!`)
  i = i+1
  }
  return newFacts
}

function iLoveTheBeatles(number){
  var band = []
 // var i = 0
  do{
   band.push("I love the Beatles!")
   number += 1
  } while(number < 15)
  return band
}