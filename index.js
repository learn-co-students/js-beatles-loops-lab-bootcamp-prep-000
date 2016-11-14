function theBeatlesPlay(musicians, instruments){
  var array = []
  for (let i = 0; i<=(musicians.length-1); i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  } return array
}

function johnLennonFacts(facts){
  var factsArray = []
  var n = 0
  while (n<facts.length){
    factsArray[n] = facts[n]+'!!!'
    n++
  } return factsArray
}

function iLoveTheBeatles(n){
  var array = []
  do{
    array.push('I love the Beatles!')
    n++
  } while (n<15)
  return array
}
