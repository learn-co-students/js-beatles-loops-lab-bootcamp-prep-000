function theBeatlesPlay(musicians, instruments){
  var array = []
  for(var i=0;i<musicians.length;i++)
  {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts){
var array = []
var n=0
  while (n<facts.length)
  {
    array.push(`${facts[n]}!!!`)
    n++
  }
  return array
}

function iLoveTheBeatles(num){
  var array = []
  do {
      array.push("I love the Beatles!")
      num++
  } while (num < 15);
  return array
}
