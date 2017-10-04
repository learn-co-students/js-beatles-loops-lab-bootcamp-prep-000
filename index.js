//Combines info from two arrays and creates a new array of strings.
// Returns an array of strings containing what instruments each musician plays.

function theBeatlesPlay(musicians, instruments){
  var bandInfo = []
  for (var i=0; i<musicians.length; i++){
    bandInfo.push(`${musicians[i]} plays ${instruments[i]}`)
    }
  return bandInfo
}

//Returns a new array of original strings with added exclamation points.

function johnLennonFacts(facts){
  var newFacts = []
  var counter = 0
  while (counter < facts.length) {
  newFacts.push(`${facts[counter]}!!!`)
  counter++
  }
  return newFacts
}


/* Create a function iLoveTheBeatles which accepts a number as a parameter.
The body of the function should create a variable that stores an empty array.
Then, implement a do-while loop inside the function that adds "I love the Beatles!"
 to the empty array. Then the loop should increment the number passed in as a
 parameter. The condition of the loop should check to see that the parameter
 number is less than 15. The function should return the array with the strings
 "I love the Beatles!"*/

function iLoveTheBeatles(n){
  var strings = []

  do{
    strings.push("I love the Beatles!")
    n++
  }
  while(n<15)
  return strings
}
