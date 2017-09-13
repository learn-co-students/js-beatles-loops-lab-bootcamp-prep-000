function theBeatlesPlay(musicians, instruments){
var array = []
  for(var i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts){
var i = 0
var shoutedFacts = []
  while(i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }
  return shoutedFacts
}

function iLoveTheBeatles(n){
var array = []
do{
  array.push("I love the Beatles!")
  n++
} while (n<15)
return array
}
