function theBeatlesPlay(musicians, instruments){
  var array = []
  for (var i = 0; i < musicians.length ; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts){
  var num = 0
  while (num < facts.length){
    facts[num] = `${facts[num]}` + "!!!"
    num ++
  }
  return facts
}

function iLoveTheBeatles(number){
  var array = []
  do {
    array.push("I love the Beatles!")
    number += 1
  } while(number < 15)
  return array
}