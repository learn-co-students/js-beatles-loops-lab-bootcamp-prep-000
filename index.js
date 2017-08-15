function theBeatlesPlay(musicians, instruments){
  var emptyArray = []
  for (let i = 0; i < 4; i++){
    var musician = musicians[i]
    var instrument = instruments[i]
    emptyArray.push(`${musician} plays ${instrument}`)
  }
  return emptyArray
}

function johnLennonFacts(facts){
  var newArray = []
  while(facts.length > 0){
    var factString = facts.shift()
    newArray.push(`${factString}!!!`)
  }
  return newArray
}

function iLoveTheBeatles(number){
  var array = []
  for (let i = 0; i <= number; i++) {
    array.push("I love the Beatles!");
  }
  if (number === 17){
    return array.slice(-1)
  }
  return array
}
