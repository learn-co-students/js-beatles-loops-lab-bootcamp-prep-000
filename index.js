// add solution here
function theBeatlesPlay(musicians, instruments) {
const arr = []

for (let i = 0, l = musicians.length; i < l; i++) {
  arr.push(`${musicians[i]} plays ${instruments[i]}`)
}
return arr
}
function johnLennonFacts(facts) {
const loudFacts = []
let i = 0
while (i < facts.length) {
  loudFacts.push(`${facts[i]}!!!`)
  i++
}
return loudFacts
}
function iLoveTheBeatles(n) {
const beatleLove = []

do {
  beatleLove.push('I love the Beatles!')
  n++
} while (n < 15);
return beatleLove
}
