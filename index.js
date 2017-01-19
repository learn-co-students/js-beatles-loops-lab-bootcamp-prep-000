function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (let i=0, l=musicians.length; i<l; i++){
    array.push("${musicians[i]} plays ${instruments[i]}")
  }
  return array
}

function johnLennonFacts (facts){
  const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
  ];

  let i=0
  while (i< facts.length){
    facts.push("${facts[i]}!!!")
    i++
  }
  return facts
}


function iLoveTheBeatles(n) {
const arr = []

do {
arr.push('I love the Beatles!')
n++
} while (n < 15)

return arr
}
