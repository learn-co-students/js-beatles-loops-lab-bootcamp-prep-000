function theBeatlesPlay(musicians,instruments){
  var array = []
  for (var i = 0; i < musicians.length; i++){
  array.push(`${musicians[i]} plays ${instruments[i]}`)}
  return array
}

function johnLennonFacts(facts){
  var i = 0
  var factArray = []
while (i < facts.length){
  factArray.push(facts[i] + "!!!")
  i++
}
return factArray
}

function iLoveTheBeatles(num){
  var array = []

  do {array.push("I love the Beatles!")
  num++
}
  while (num < 15)
  return array
}
