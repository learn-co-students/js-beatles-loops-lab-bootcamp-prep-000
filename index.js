
function theBeatlesPlay(musicians, instruments) {
  var emptyarray = []
  for (var i=0; i<4; i++) {
        emptyarray.push(`${musicians[i]} plays ${instruments[i]}`);
    }   return emptyarray
}


function johnLennonFacts(facts) {
  let new_array = []

  let i = 0
  while(i < facts.length) {
    new_array.push(facts[i] + '!!!')
    i++
  }

  return new_array
}


function iLoveTheBeatles(n) {
  var emptiarray = [];

  do {n++; emptiarray.push("I love the Beatles!")
} while (n<15);
return emptiarray
}
