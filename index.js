function theBeatlesPlay (musicians, instruments) {
  //function should create array stored in empty variable
  const instrumentsPlay = []
  //for loop for musicians array
  for(let i = 0; i < musicians.length; i++) {
    //should log same sentence for every member
      instrumentsPlay.push(`${musicians[i]} plays ${instruments[i]}`);
    }
    //return the array of new strings
    return instrumentsPlay
}


function johnLennonFacts (facts) {
  var exclamations = []
  var i = 0
  // while loop to loop over facts
  while (i < facts.length) {
    exclamations.push(`${facts[i]}!!!`)
    i++;
  }
  return exclamations
}


function iLoveTheBeatles (n) {
  //should create variable that stores empty array
  var array = []
  //do-while that adds "I love the Beatles" to empty array
  do {
    //loop should increment n passed in
    array.push("I love the Beatles!")
    n++
    //should check that n is less than 15
  } while (n < 15);
   //return string with "i love Beatles"
  return array;
}
