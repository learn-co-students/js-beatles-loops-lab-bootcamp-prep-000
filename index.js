// Create a function theBeatlesPlay, which accepts two array parameters
function theBeatlesPlay(musicians, instruments){
  // Create an empty array stored in a variable
  var arr = [];
  // Create a for loop which loops over the musicians array
  for(let i = 0; i < musicians.length; i++) {
    // Add string to empty array
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  // Return the new array
  return arr;
}

// Create a function johnLennonFacts, which accepts one array parameter
// Use a while loop to loop over the facts array and add "!!!" to the end of every fact. The function should return an array of strings with exclamation points.
function johnLennonFacts(facts) {
  var arr=[];
  var i = 0;
  while(facts[i]) {
    arr.push(facts[i] + "!!!");
    i++;
  }
  return arr;
}

// Create a function iLoveTheBeatles, which accepts one number as a parameter
function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    num++
  }
  while(num < 15);
  return arr;
}