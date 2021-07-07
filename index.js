// add solution here

// Create a function theBeatlesPlay, which accepts two parameters--an array of musicians and an array of instruments.
// Create a variable with an empty array.
// Use a for loop, which iterates over the array. of musicians. Be careful about what value you set your counter variable to store.
//  (Hint: Think about what the first index of an array is).
// The first time through the loop, it should create a string using the first index of the musicians array and the
// first index of the instruments array: "John Lennon plays guitar".
// Add this string to the empty array you created. The loop should make the same sentence for every member of the musicians array.
// The function should return the array of new strings containing what instruments each musician plays.
//
// Create a function johnLennonFacts.
//
// This function will accept one argument, an array of facts about John Lennon (note that it might not be exactly the following facts):

////////////////////////////////////////////////////////


function theBeatlesPlay(musicians, instruments){
  const arr = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return arr
}



function johnLennonFacts(facts){
  const yelledFacts = []

  let i = 0
  while (i < facts.length) {
    yelledFacts.push(`${facts[i]}!!!`)
    i++
  }

  return yelledFacts
}

function iLoveTheBeatles(n) {
  const arr = []

  do {
    arr.push(`I love the Beatles!`)
    n++
  } while (n < 15)

  return arr
}
