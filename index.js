function theBeatlesPlay(musicians, instruments) {
  var str = []
  for(var i = 0; i < musicians.length; i++)
  {
    //console.log(musicians[i])
    str.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return str
}

function johnLennonFacts(facts) {
  var str = []
  var i = 0;
  while(i < facts.length)
  {
    str.push(`${facts[i]}!!!`)
    i++
  }
  return str
}

function iLoveTheBeatles(number) {
  var newArr = []
  do {
    newArr.push("I love the Beatles!")
    number++
  } while (number < 15)

  return newArr
}