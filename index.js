function theBeatlesPlay(musicians, instruments) {
  var emptyArray = []
  for (var i = 0;i < musicians.length; i++) {
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`)
  
  }
 return emptyArray
}

function johnLennonFacts(facts) {
  var exclamation = []
  var i = 0
  while(i<facts.length) {
    exclamation.push(`${facts[i]}!!!` )
    i++
  }
  return exclamation
}

function iLoveTheBeatles(number) {
  var last = []
  do{
    last.push("I love the Beatles!")
    number++
  }while(number<15)
  return last
}