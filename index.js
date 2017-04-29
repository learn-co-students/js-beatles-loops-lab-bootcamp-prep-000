function theBeatlesPlay(musicians, instruments){
  var array = []
  for (let i = 0; array.length < musicians.length; i += 1){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts){
  var array = []
  var i = 0
  while (array.length < facts.length){
    array.push(`${facts[i]}` + '!!!')
    i += 1
  }
  return array
}

function iLoveTheBeatles(number){
  var array = []
  do {
    array.push(`I love the Beatles!`)
    number += 1
  }
  while (number < 15);
  return array
}