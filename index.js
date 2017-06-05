const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
]

function theBeatlesPlay(musicians, instruments) {
  var newArr = []
  for (let i=0; i<musicians.length; i++) {
    newArr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArr
}


function johnLennonFacts(facts) {
  var newArr = []
  for (let i=0; i<facts.length; i++) {
    newArr.push(`${facts[i]}!!!`)
  }
  return newArr
}


// function iLoveTheBeatles(number) {
//   var newArr = []
//   while (number < 15) {
//     newArr.push("I love the Beatles!")
//     number++
//   }
//   return newArr
// }

// the same thing

function iLoveTheBeatles(number) {
  var newArr = []
  do {newArr.push('I love the Beatles!')
  number++
  } while (number<15)
  return newArr
}
