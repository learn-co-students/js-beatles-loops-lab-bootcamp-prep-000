function theBeatlesPlay(musiciansArray, instrumentsArray){
  var newArray = []
  for(var i = 0; musiciansArray.length > i; i++){
    newArray.push(musiciansArray[i] + ' plays ' + instrumentsArray[i])
  }
  return newArray
}
function johnLennonFacts(factsArray) {
    var newArray = []
    var i = 0
    while (i < factsArray.length) {
      newArray.push(`${factsArray[i]}!!!`)
      i++
    }
    return newArray
  }
function iLoveTheBeatles(number){
  var newArray = []
  do {
  newArray.push('I love the Beatles!')
  number++
} while (number < 15);
 return newArray
}

/*
Create a function iLoveTheBeatles which accepts a number as a parameter.
The body of the function should create a variable that stores an empty array.
Then, implement a do-while loop inside the function that adds "I love the Beatles!" to the empty array.
Then the loop should increment the number passed in as a parameter.
The condition of the loop should check to see that the parameter number is less than 15.
The function should return the array with the strings "I love the Beatles!".
*/
