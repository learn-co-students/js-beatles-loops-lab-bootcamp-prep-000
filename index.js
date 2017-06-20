function theBeatlesPlay(musicians, instruments) {
var beatles = []
for (var i = 0; i < 4; i++){
  beatles.push( `${musicians[i]} plays ${instruments[i]}` );
}
return beatles
}

function johnLennonFacts(facts) {
  let countup = 0;
  while(countup < facts.length) {
    facts[countup] = facts[countup] + "!!!"
    countup++
  }
  return facts
}

function iLoveTheBeatles(n) {
var lovebeatles = []
do {
 lovebeatles.push("I love the Beatles!")
 n++
}
  while (n<15);
 return lovebeatles
 }
