/*

var mus = ["J", "P", "G", "R"]
var ins = ["g", "bg", "lg", "d"]



console.log(mus[0]) 

*/

/*
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]

function johnLennonFacts(facts) {
  let i = 0
while (i < facts.length) {
  console.log(`${facts[i]}` + " !!!")
  i++
}
}
*/

function iLoveTheBeatles(n) {
  var bt = []
  do {
    bt.push("I love the Beatles!")
    n++
  } while (n < 15)
  
  return bt
}

console.log(iLoveTheBeatles(0))