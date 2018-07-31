// add solution here
function theBeatlesPlay(musicians, instruments) { // DONE - Create a function theBeatlesPlay, which accepts two parameters- an array of musicians and an array of instruments.
  var newArray = []; // DONE - The body of the function should create an empty array stored in a variable.
  for (var i = 0; i < musicians.length; i++) { // DONE - The function should also contain a for loop which loops over the array of musicians.
    newArray.push(musicians[i] + " plays " + instruments[i]);// DONE - the body of the loop should create a string using the first index of the musicians array and the first index of the instruments array: "John Lennon plays guitar".
  } // DONE - This string should be added to the empty array you created.
  return newArray; // The function should return the array of new strings.
}

function johnLennonFacts(facts) {
  var newFacts = [] //this is to create a new set of facts without modifying the original.
  var i = 0
  while (i < facts.length) { //we could have used "var i = 0" and "i++" inside of the condition but we separated it for the while syntax.
    newFacts.push(facts[i] + "!!!"); // purpose of this function, to add "!!!" at the end of all the facts.
    i++;
  }
  return newFacts; //we'd want the new duplicated array.
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!") //everything that needs to happen
    number++ // don't get this section confused with the condition
  } while (number < 15) //this is the only condition
  return array; // DO NOT FORGET THAT YOU MUST RETURN SOMETHING
}
