function theBeatlesPlay (musicians,instruments){
  var empty = [];

  for   (var i = 0, length = musicians.length; i<length ; i++) {
   empty.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return empty
}

function johnLennonFacts(facts){

const loudFacts =[]
let i = 0
while (i < facts.length) {
  loudFacts.push(`${facts[i]}!!!`)
  i++
}
return loudFacts
}

function iLoveTheBeatles(number){
let emptiness = [];
do {emptiness.push("I love the Beatles!")
number++

} while (number<15);
return emptiness
}
