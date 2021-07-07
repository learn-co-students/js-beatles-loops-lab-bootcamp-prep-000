// + Create a function `theBeatlesPlay`, which accepts two parameters- an array of
// musicians and an array of instruments. The body of the function should create an
// empty array stored in a variable. The function should also contain a for loop
// which loops over the array of musicians.
var theBeatlesPlay = function(musicians, instruments) {
  var Beatles = []
  for (var i = 0; i < 4; i++) {
    Beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return Beatles
}
// + Create a function `johnLennonFacts`. This function will accept one argument, an
// array of facts about John Lennon.
// Use a while loop to loop over the facts array and add `"!!!"` to the end of
// every fact. The function should return an array of strings with exclamation
// points.
var johnLennonFacts = function(factsArray) {
  const facts = []
  var i = 0

  while (i < factsArray.length) {
    facts.push(`${factsArray[i]}!!!`)
    i++
  }
  return facts
}
// + Create a function `iLoveTheBeatles` which accepts a number as a parameter. The
// body of the function should create a variable that stores an empty array. Then,
// implement a do-while loop inside the function that adds `"I love the Beatles!"`
// to the empty array. Then the loop should increment the number passed in as a
// parameter. The condition of the loop should check to see that the parameter
// number is less than `15`. The function should return the array with the strings
// `"I love the Beatles!"`.
var iLoveTheBeatles = function(n) {
  let beatlesArray = []

  do {
    beatlesArray.push(`I love the Beatles!`)
    n++
  } while (n < 15)
  return beatlesArray
}
