function theBeatlesPlay(musicians, instruments){
  var firstvariable = []
  for (let i = 0; i < musicians.length; i++) {

     firstvariable.push(musicians[i] + " plays " + instruments[i])   }
       return firstvariable
}

function johnLennonFacts(facts){
  var newFacts = []
  var i = 0
  while (i < facts.length) {
    newFacts.push(facts[i] + "!!!" )
    i++;
  }
  return newFacts
}

function iLoveTheBeatles(n){
var array = []
do {
array.push("I love the Beatles!")
n++
}while (n<15)
return array
}
