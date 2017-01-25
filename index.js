function theBeatlesPlay(musicians, instruments){
  var array = []
  for (let i = 0; i < musicians.length; i++){
  array.push(`${musicians[i]} plays ${instruments[i]}`)
  }return array
}

function johnLennonFacts(facts){
var array = []
let n = 0
  while (n < facts.length){
    array.push(`${facts[n]}!!!`)
    n++
}return array
}

function iLoveTheBeatles(int){
  var array = []
  var n = int
  do {
array.push("I love the Beatles!")
n++
  }while( n < 15)
  return array
}
