function theBeatlesPlay(musicians, instruments){
  var bandLineUp = []
  for (var i = 0; i < 1; i++) {
    bandLineUp.push(`${musicians[0]} plays ${instruments[0]}`, `${musicians[1]} plays ${instruments[1]}`, `${musicians[2]} plays ${instruments[2]}`, `${musicians[3]} plays ${instruments[3]}`)
  }
  return bandLineUp
}

function johnLennonFacts(facts) {
let johnFacts = [];
let i = 0
while ( i < facts.length) {
   johnFacts.push(`${facts[i]}!!!`)
  ++i
 }
 return johnFacts
 }


 function iLoveTheBeatles(n){
   let fans = [];
   do {
    fans.push('I love the Beatles!')
   n++
 } while (n < 15)
   return fans
 }
