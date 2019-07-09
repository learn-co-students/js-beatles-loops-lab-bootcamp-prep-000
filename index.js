// add solution here

function theBeatlesPlay(musicians, instruments){
  var empty = []
  for(var i=0; i< musicians.length; i++){
    empty.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return empty
}

function johnLennonFacts(facts){
  var excitingFacts = []
  var i = 0
  
  while(i < facts.length){
    excitingFacts.push(`${facts[i]}!!!`)
    i++
  }
  return excitingFacts
}

function iLoveTheBeatles(number){
  var beatles = []
  do{
    beatles.push("I love the Beatles!")
    number++
  } while (number < 15)
  return beatles
}
