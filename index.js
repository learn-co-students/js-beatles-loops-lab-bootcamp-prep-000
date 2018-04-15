// function theBeatlesPlay(musicians, instruments) {
//   let strings = []
//   for (let i = 0; i < musicians.length; i++) {
//     strings[i] = `${musicians[i]} plays ${instruments[i]}`
//   }
//   return strings
// }

// function theBeatlesPlay(musicians, instruments) {
//   let strings = []
//   for (let i = 0; i < musicians.length; i++) {
//     strings = [...strings, `${musicians[i]} plays ${instruments[i]}`]
//   }
//   return strings
// }

// function theBeatlesPlay(musicians, instruments) {
//   let strings = []
//   for (let i = 0; i < musicians.length; i++) {
//     strings.push(`${musicians[i]} plays ${instruments[i]}`)
//   }
//   return strings
// }

function theBeatlesPlay(musicians, instruments) {
  let strings = []
  for (let i = 0; i < musicians.length; i++) {
    strings.splice(strings[i], 0, `${musicians[i]} plays ${instruments[i]}`)
  }
  return strings
}

function johnLennonFacts(facts) {
  let i = 0
  let strings = []
  while (i < facts.length) {
    strings.push(`${facts[i]}!!!`)
    i++
  }
  return strings
}

function iLoveTheBeatles(number) {
  let strings = []
  do {
    strings.push("I love the Beatles!")
    number++
  } while (number < 15);
  return strings
}
