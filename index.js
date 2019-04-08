// add solution here
function theBeatlesPlay(arrayMusicians, arrayInstruments) {
  var results = []; //creates empty array
  for (var i = 0; i < arrayMusicians.length ; i++) { //remember to define i; i iterates over musicians
    results.push(`${arrayMusicians[i]} plays ${arrayInstruments[i]}`)
  }
  return results; //returns the results
}

function johnLennonFacts(arrayFacts) {
  var i = 0; //initialize i
  var results = []; //create empty array
  while (arrayFacts[i]) { //iterate i over the number of facts
    results.push(`${arrayFacts[i]}!!!`) //push one fact
    i++; //continue on with the next
  }
  return results; //returns the result of this
}

function iLoveTheBeatles(num) {
  var array = []; //creates empty array
  do {
    array.push("I love the Beatles!") //pushes statement into array initially and multiple times
    num++; //increments the number
  } while (num < 15); //checks if number is <15
  return array; //if num = 7, then it should have 8 statements of "I love the Beatles" cuz +1 from initial push
}