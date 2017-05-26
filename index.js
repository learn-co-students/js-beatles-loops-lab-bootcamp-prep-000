var theBeatlesPlay = function(musicians, instruments) {
  let tmpArr = []

  for(var i = 0; i < musicians.length; i++) {
    tmpArr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return tmpArr
}

var johnLennonFacts = function(facts) {
  let num = 0
  while (num < facts.length) {
    facts[num] = `${facts[num]}!!!`
    num ++
  }
  return facts
}

var iLoveTheBeatles = function(num) {
  let tmpArr = []

  do {
    tmpArr.push("I love the Beatles!")
    num++
  } while(num < 15)
  return tmpArr
}
