// add solution here
function theBeatlesPlay(musicans, instruments) {
  var array = [] 
  for  (var i = 0; i < musicans.length; i++) {
    array.push(musicans[i] +  " plays "  + instruments[i])
  }
  return array
}

function johnLennonFacts(facts) {
  var exclamationPoints = "!!!"
  var array1 = []
  for (var b = 0; b < facts.length; b++) {
    array1.push(facts[b] + exclamationPoints )
  }
  return array1
}

// create a function iLoveTheBeatles which accepts a number as a parameter
function iLoveTheBeatles(num) {
  // create a variable that stores an empty array.
  let arr = [];
 
  // implement a do-while loop inside the function that adds "I love the Beatles!" to the empty array.
  // the loop should increment the number passed as a parameter.
  // the condition of the loop should check that the parameter number is less than 15
  do {
    arr.push("I love the Beatles!");
    num++;  
  } while (num < 15);
 
  // return the array of strings.
  return arr;
}