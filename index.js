/*
  Objectives:
  - build a for loop
  - build a while loop
  - buid a do-while loop
*/


function theBeatlesPlay(musicianArray, instrumentArray) {
  //should create an empty array stored in a variable
  //should contain a 'for' loop which loops over the array of musicians

  var theBeatles = new Array();
  /*
  var mArray = musicianArray
  var iArray = instrumentArray
  */
  for (let i = 0; i < instrumentArray.length; i++ ) {
    theBeatles.push(`${musicianArray[i]} plays ${instrumentArray[i]}`)
  }

  console.log(theBeatles)

  return theBeatles

} // end of theBeatlesPlay function

const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

theBeatlesPlay(musicians, instruments)

// ---------------

function johnLennonFacts(lennonFactsArray) {
  //use a 'while' loop to loops over the facts and add '!!!' to the end of every fact
  let i = 0
  while (i < lennonFactsArray.length) {
    lennonFactsArray[i] = `${lennonFactsArray[i]}!!!`
    i++

  }
  console.log(lennonFactsArray)

  return lennonFactsArray

} // end of johnLennonFacts function

const johnLennonFactsArray = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"

]

johnLennonFacts(johnLennonFactsArray)

// ---------------

function iLoveTheBeatles(aNumber) {
  // should create a variable that store an empty array
  // then implement a do while loop that adds "I love the Beatles" to the empty array
  // then loop should increment the number passed as a parameter
  // condtion of the loop should check to see that the parameter number is less then 15
  // should return the array with the strings "I love the Beatles"

  var theStrings = new Array();

  do {
    theStrings.push('I love the Beatles!')
    aNumber++

  } while (aNumber < 15)

  console.log(theStrings)

  return theStrings

} //end of the iLoveTheBeatles function

iLoveTheBeatles(7)
