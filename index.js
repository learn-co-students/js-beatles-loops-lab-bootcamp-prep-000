function theBeatlesPlay(musicians, instruments) {
let array = [];

for(let i = 0; i < 4, i < musicians.length; i++) {
  array.push(`${musicians[i]} plays ${instruments[i]}`) 
}
return array
};


function johnLennonFacts(facts) {
  let morefacts = []
  var i = 0
  while(i < facts.length) {
    morefacts.push(`${facts[i]}!!!`)
    i++
  } return morefacts
};

function iLoveTheBeatles(number) {
  let array = [];
  do {array.push("I love the Beatles!")
  number++
} while(number < 15)
  return array
}